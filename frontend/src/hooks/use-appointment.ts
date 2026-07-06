import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import type { Appointment, AppointmentRequest } from "@/lib/api/types";

export function useCreateAppointment() {
  return useMutation({
    mutationFn: async (payload: AppointmentRequest) => {
      const { data } = await apiClient.post<Appointment>(
        endpoints.appointments.create,
        payload
      );
      return data;
    },
  });
}
