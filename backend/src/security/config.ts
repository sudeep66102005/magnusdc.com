export function validateSecurityConfig(env: Record<string, unknown>) {
  if (
    !/^[a-f0-9]{64,}$/i.test(
      typeof env.JWT_SECRET === 'string' ? env.JWT_SECRET : '',
    )
  ) {
    throw new Error(
      'JWT_SECRET must be a randomly generated hex secret of at least 32 bytes',
    );
  }
  const email = typeof env.ADMIN_EMAIL === 'string' ? env.ADMIN_EMAIL : '';
  const hash =
    typeof env.ADMIN_PASSWORD_HASH === 'string' ? env.ADMIN_PASSWORD_HASH : '';
  if (
    (email || hash) &&
    (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !/^scrypt\$[a-f0-9]{32}\$[a-f0-9]{128}$/.test(hash))
  ) {
    throw new Error(
      'Configure both ADMIN_EMAIL and a valid scrypt ADMIN_PASSWORD_HASH, or neither to disable login',
    );
  }
  if (env.NODE_ENV === 'production' && (!env.DATA_DIR || !env.CORS_ORIGIN)) {
    throw new Error(
      'Production requires DATA_DIR on persistent storage and explicit CORS_ORIGIN',
    );
  }
  return env;
}
export const tokenPolicy = { issuer: 'magnus-api', audience: 'magnus-staff' };
