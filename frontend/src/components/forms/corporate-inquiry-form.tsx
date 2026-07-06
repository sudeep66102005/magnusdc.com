"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitCorporateInquiry } from "@/hooks/use-corporate-inquiry";

const corporateSchema = z.object({
  companyName: z.string().min(2, "Please enter your company name"),
  contactPerson: z.string().min(2, "Please enter a contact person"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  employeeCount: z.string().optional(),
  message: z.string().min(10, "Please share a few more details"),
});

type CorporateFormValues = z.infer<typeof corporateSchema>;

export function CorporateInquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CorporateFormValues>({
    resolver: zodResolver(corporateSchema),
  });

  const { mutate, isPending, isSuccess, isError } = useSubmitCorporateInquiry();

  function onSubmit(values: CorporateFormValues) {
    const employeeCount = values.employeeCount
      ? Number(values.employeeCount)
      : undefined;
    mutate(
      { ...values, employeeCount },
      { onSuccess: () => reset() }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="companyName">Company Name</Label>
          <Input id="companyName" {...register("companyName")} />
          {errors.companyName && (
            <p className="text-xs text-destructive">{errors.companyName.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="contactPerson">Contact Person</Label>
          <Input id="contactPerson" {...register("contactPerson")} />
          {errors.contactPerson && (
            <p className="text-xs text-destructive">{errors.contactPerson.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" {...register("phone")} />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="employeeCount">Approx. Employee Count (optional)</Label>
        <Input id="employeeCount" type="number" min={1} {...register("employeeCount")} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea id="message" rows={5} {...register("message")} />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isPending} className="w-full">
        {isPending ? "Submitting..." : "Request Consultation"}
      </Button>

      {isSuccess && (
        <p className="text-sm font-medium text-emerald-600">
          Thank you! Our corporate care team will reach out shortly.
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
