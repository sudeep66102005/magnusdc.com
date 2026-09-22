"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateAppointment } from "@/hooks/use-appointment";
import { DirectContactFallback } from "@/components/forms/direct-contact-fallback";
import {
  isLeadBackendConfigured,
  mailtoFor,
  whatsappFor,
} from "@/lib/forms/lead-delivery";

const appointmentSchema = z.object({
  patientName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(8, "Please enter a valid phone number"),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export function AppointmentForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      patientName: "",
      phone: "",
    },
  });

  const liveValues = watch();
  const { mutate, isPending, isSuccess, isError } = useCreateAppointment();
  const fallbackMailto = mailtoFor("appointment", liveValues);
  const fallbackWhatsapp = whatsappFor("appointment", liveValues);

  function onSubmit(values: AppointmentFormValues) {
    mutate(
      {
        ...values,
        department: "",
        preferredDate: "",
        preferredTime: "",
      },
      { onSuccess: () => reset() },
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-1.5">
        <Label htmlFor="patientName">Full Name</Label>
        <Input
          id="patientName"
          placeholder="Jane Doe"
          {...register("patientName")}
        />
        {errors.patientName && (
          <p className="text-xs text-destructive">
            {errors.patientName.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          placeholder="+91 98765 43210"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-xs text-destructive">{errors.phone.message}</p>
        )}
      </div>

      {isLeadBackendConfigured ? (
        <Button type="submit" size="lg" disabled={isPending} className="w-full">
          {isPending ? "Booking..." : "Instant Book"}
        </Button>
      ) : (
        <DirectContactFallback
          heading="Direct booking is available by phone or WhatsApp"
          mailto={fallbackMailto}
          whatsapp={fallbackWhatsapp}
        />
      )}

      {isSuccess && (
        <p className="text-sm font-medium text-primary">
          Your booking request has been received. Our team will confirm shortly.
        </p>
      )}
      {isError && (
        <DirectContactFallback
          tone="error"
          heading="That request did not reach us — use one of these direct options"
          mailto={mailtoFor("appointment", getValues())}
          whatsapp={whatsappFor("appointment", getValues())}
        />
      )}
    </form>
  );
}

