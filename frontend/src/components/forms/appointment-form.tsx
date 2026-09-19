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
import { specialties } from "@/lib/constants/navigation";

const appointmentSchema = z.object({
  patientName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  email: z
    .union([z.string().email("Please enter a valid email"), z.literal("")])
    .optional(),
  department: z.string().min(2, "Please choose a department"),
  preferredDate: z.string().min(1, "Please choose a preferred date"),
  preferredTime: z.string().min(1, "Please choose a preferred time"),
  notes: z
    .string()
    .max(500, "Please keep notes under 500 characters")
    .optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const fieldClass =
  "w-full rounded-md border border-[#142F86]/15 bg-white px-3 py-2.5 text-sm text-[#142F86] outline-none focus:border-[#142F86]";

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
      email: "",
      department: "",
      preferredDate: "",
      preferredTime: "",
      notes: "",
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
        email: values.email?.trim() || undefined,
        notes: values.notes?.trim() || undefined,
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

      <div className="space-y-1.5">
        <Label htmlFor="email">Email (optional)</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="department">Department</Label>
        <select
          id="department"
          className={fieldClass}
          {...register("department")}
        >
          <option value="">Select a department</option>
          {specialties.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>
        {errors.department && (
          <p className="text-xs text-destructive">
            {errors.department.message}
          </p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="preferredDate">Preferred Date</Label>
          <Input
            id="preferredDate"
            type="date"
            {...register("preferredDate")}
          />
          {errors.preferredDate && (
            <p className="text-xs text-destructive">
              {errors.preferredDate.message}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="preferredTime">Preferred Time</Label>
          <Input
            id="preferredTime"
            type="time"
            {...register("preferredTime")}
          />
          {errors.preferredTime && (
            <p className="text-xs text-destructive">
              {errors.preferredTime.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="notes">Notes (optional)</Label>
        <textarea
          id="notes"
          rows={3}
          placeholder="Tell us anything that will help us prepare for your visit"
          className={fieldClass}
          {...register("notes")}
        />
        {errors.notes && (
          <p className="text-xs text-destructive">{errors.notes.message}</p>
        )}
      </div>

      {isLeadBackendConfigured ? (
        <Button type="submit" size="lg" disabled={isPending} className="w-full">
          {isPending ? "Booking..." : "Book Appointment"}
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
          Your appointment request has been received. Our team will confirm
          shortly.
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
