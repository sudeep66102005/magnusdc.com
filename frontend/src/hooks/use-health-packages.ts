import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import type { HealthPackage } from "@/lib/api/types";

export function useHealthPackages(category?: HealthPackage["category"]) {
  return useQuery({
    queryKey: ["health-packages", category],
    queryFn: async () => {
      const { data } = await apiClient.get<HealthPackage[]>(
        endpoints.healthPackages.list,
        { params: category ? { category } : undefined }
      );
      return data;
    },
  });
}

export function useHealthPackage(slug: string) {
  return useQuery({
    queryKey: ["health-packages", slug],
    queryFn: async () => {
      const { data } = await apiClient.get<HealthPackage>(
        endpoints.healthPackages.detail(slug)
      );
      return data;
    },
    enabled: Boolean(slug),
  });
}
