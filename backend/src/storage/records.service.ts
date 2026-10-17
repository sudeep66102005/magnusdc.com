import {
  Injectable,
  OnModuleDestroy,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseSync } from 'node:sqlite';
import { chmodSync, mkdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
// One backend instance on a private persistent volume. Never place DATA_DIR in a web root.
@Injectable()
export class RecordsService implements OnModuleDestroy {
  private readonly db: DatabaseSync;
  constructor(config: ConfigService) {
    const directory = resolve(
      config.get<string>('DATA_DIR') ?? './var/private',
    );
    mkdirSync(directory, { recursive: true, mode: 0o700 });
    chmodSync(directory, 0o700);
    const file = join(directory, 'requests.sqlite');
    this.db = new DatabaseSync(file);
    chmodSync(file, 0o600);
    this.db.exec(
      'PRAGMA busy_timeout=5000; PRAGMA journal_mode=DELETE; PRAGMA synchronous=FULL; CREATE TABLE IF NOT EXISTS records (id TEXT PRIMARY KEY, kind TEXT NOT NULL, payload TEXT NOT NULL, created_at TEXT NOT NULL); CREATE INDEX IF NOT EXISTS records_kind ON records(kind,created_at);',
    );
  }
  insert<T extends { id: string; createdAt: string }>(
    kind: string,
    record: T,
  ): T {
    this.db.exec('BEGIN IMMEDIATE');
    try {
      const count = this.db
        .prepare('SELECT count(*) AS total FROM records')
        .get() as { total: number };
      if (count.total >= 10000)
        throw new ServiceUnavailableException(
          'Request capacity reached. Please contact the clinic directly.',
        );
      this.db
        .prepare(
          'INSERT INTO records(id,kind,payload,created_at) VALUES (?,?,?,?)',
        )
        .run(record.id, kind, JSON.stringify(record), record.createdAt);
      this.db.exec('COMMIT');
      return record;
    } catch (error) {
      this.db.exec('ROLLBACK');
      throw error;
    }
  }
  list<T>(kind: string, offset = 0): T[] {
    return (
      this.db
        .prepare(
          'SELECT payload FROM records WHERE kind=? ORDER BY created_at DESC,id LIMIT 100 OFFSET ?',
        )
        .all(kind, offset) as { payload: string }[]
    ).map((r) => JSON.parse(r.payload) as T);
  }
  get<T>(kind: string, id: string): T | undefined {
    const row = this.db
      .prepare('SELECT payload FROM records WHERE kind=? AND id=?')
      .get(kind, id) as { payload: string } | undefined;
    return row ? (JSON.parse(row.payload) as T) : undefined;
  }
  count(kind: string, department: string): number {
    const row = this.db
      .prepare(
        "SELECT count(*) AS total FROM records WHERE kind=? AND json_extract(payload,'$.department')=?",
      )
      .get(kind, department) as { total: number };
    return row.total;
  }
  onModuleDestroy() {
    this.db.close();
  }
}
