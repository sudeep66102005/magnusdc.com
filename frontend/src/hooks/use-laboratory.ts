import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import type { LabTest } from "@/lib/api/types";

export function useLabTests() {
  return useQuery({
    queryKey: ["laboratory"],
    queryFn: async () => {
      const { data } = await apiClient.get<LabTest[]>(
        endpoints.laboratory.list
      );
      return data;
    },
  });
}

export function useLabTest(slug: string) {
  return useQuery({
    queryKey: ["laboratory", slug],
    queryFn: async () => {
      const { data } = await apiClient.get<LabTest>(
        endpoints.laboratory.detail(slug)
      );
      return data;
    },
    enabled: Boolean(slug),
  });
}
