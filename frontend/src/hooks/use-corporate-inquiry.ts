import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import type { CorporateInquiryRequest } from "@/lib/api/types";

export function useSubmitCorporateInquiry() {
  return useMutation({
    mutationFn: async (payload: CorporateInquiryRequest) => {
      const { data } = await apiClient.post(
        endpoints.corporates.inquiry,
        payload
      );
      return data;
    },
  });
}
