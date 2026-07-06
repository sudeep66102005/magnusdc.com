import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import type { ContactRequest } from "@/lib/api/types";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (payload: ContactRequest) => {
      const { data } = await apiClient.post(endpoints.contact.submit, payload);
      return data;
    },
  });
}
