import { useMutation } from "@tanstack/react-query";
import { endpoints } from "@/lib/api/endpoints";
import { submitLead } from "@/lib/forms/lead-delivery";
import type { AppointmentRequest } from "@/lib/api/types";

export function useCreateAppointment() {
  return useMutation({
    mutationFn: async (payload: AppointmentRequest) => {
      // Routed through submitLead so a configured static form handler is used
      // when the NestJS API is not deployed. See lib/forms/lead-delivery.ts.
      await submitLead("appointment", endpoints.appointments.create, { ...payload });
    },
  });
}
