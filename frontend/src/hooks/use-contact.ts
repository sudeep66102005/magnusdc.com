import { useMutation } from "@tanstack/react-query";
import { endpoints } from "@/lib/api/endpoints";
import { submitLead } from "@/lib/forms/lead-delivery";
import type { ContactRequest } from "@/lib/api/types";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (payload: ContactRequest) => {
      // Routed through submitLead so a configured static form handler is used
      // when the NestJS API is not deployed. See lib/forms/lead-delivery.ts.
      await submitLead("contact", endpoints.contact.submit, { ...payload });
    },
  });
}
