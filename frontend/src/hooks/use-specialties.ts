import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import type { Specialty } from "@/lib/api/types";

export function useSpecialties() {
  return useQuery({
    queryKey: ["specialties"],
    queryFn: async () => {
      const { data } = await apiClient.get<Specialty[]>(
        endpoints.specialties.list
      );
      return data;
    },
  });
}

export function useSpecialty(slug: string) {
  return useQuery({
    queryKey: ["specialties", slug],
    queryFn: async () => {
      const { data } = await apiClient.get<Specialty>(
        endpoints.specialties.detail(slug)
      );
      return data;
    },
    enabled: Boolean(slug),
  });
}
