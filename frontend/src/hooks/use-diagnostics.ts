import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import type { DiagnosticService } from "@/lib/api/types";

export function useDiagnostics() {
  return useQuery({
    queryKey: ["diagnostics"],
    queryFn: async () => {
      const { data } = await apiClient.get<DiagnosticService[]>(
        endpoints.diagnostics.list
      );
      return data;
    },
  });
}

export function useDiagnostic(slug: string) {
  return useQuery({
    queryKey: ["diagnostics", slug],
    queryFn: async () => {
      const { data } = await apiClient.get<DiagnosticService>(
        endpoints.diagnostics.detail(slug)
      );
      return data;
    },
    enabled: Boolean(slug),
  });
}
