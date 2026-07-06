"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateAppointment } from "@/hooks/use-appointment";
import { specialties } from "@/lib/constants/navigation";

const appointmentSchema = z.object({
  patientName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  department: z.string().min(1, "Please select a department"),
  preferredDate: z.string().min(1, "Please select a date"),
  preferredTime: z.string().min(1, "Please select a time"),
  notes: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export function AppointmentForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
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

  const { mutate, isPending, isSuccess, isError } = useCreateAppointment();
  const department = watch("department");

  function onSubmit(values: AppointmentFormValues) {
    mutate(values, {
      onSuccess: () => reset(),
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="patientName">Full Name</Label>
          <Input id="patientName" placeholder="Jane Doe" {...register("patientName")} />
          {errors.patientName && (
            <p className="text-xs text-destructive">{errors.patientName.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="+91 98765 43210" {...register("phone")} />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email (optional)</Label>
        <Input id="email" type="email" placeholder="jane@example.com" {...register("email")} />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="department">Department / Service</Label>
        <Select
          value={department}
          onValueChange={(value) =>
            setValue("department", (value as string) ?? "", { shouldValidate: true })
          }
        >
          <SelectTrigger id="department" className="w-full">
            <SelectValue placeholder="Select a department" />
          </SelectTrigger>
          <SelectContent>
            {specialties.map((name) => (
              <SelectItem key={name} value={name}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.department && (
          <p className="text-xs text-destructive">{errors.department.message}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="preferredDate">Preferred Date</Label>
          <Input id="preferredDate" type="date" {...register("preferredDate")} />
          {errors.preferredDate && (
            <p className="text-xs text-destructive">{errors.preferredDate.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="preferredTime">Preferred Time</Label>
          <Input id="preferredTime" type="time" {...register("preferredTime")} />
          {errors.preferredTime && (
            <p className="text-xs text-destructive">{errors.preferredTime.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="notes">Additional Notes (optional)</Label>
        <Textarea id="notes" placeholder="Any symptoms or details to share" {...register("notes")} />
      </div>

      <Button type="submit" size="lg" disabled={isPending} className="w-full">
        {isPending ? "Booking..." : "Book Appointment"}
      </Button>

      {isSuccess && (
        <p className="text-sm font-medium text-emerald-600">
          Your appointment request has been received. Our team will confirm shortly.
        </p>
      )}
      {isError && (
        <p className="text-sm font-medium text-destructive">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}
