"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSubmitCorporateInquiry } from "@/hooks/use-corporate-inquiry";
import { DirectContactFallback } from "@/components/forms/direct-contact-fallback";
import { isLeadBackendConfigured, mailtoFor } from "@/lib/forms/lead-delivery";

const corporateSchema = z.object({
  contactPerson: z.string().min(2, "Please enter your name"),
  phone: z.string().min(8, "Please enter a valid phone number"),
});

type CorporateFormValues = z.infer<typeof corporateSchema>;

export function CorporateInquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<CorporateFormValues>({
    resolver: zodResolver(corporateSchema),
    defaultValues: { contactPerson: "", phone: "" },
  });

  const { mutate, isPending, isSuccess, isError } = useSubmitCorporateInquiry();

  function onSubmit(values: CorporateFormValues) {
    mutate(
      { ...values, companyName: "", email: "", employeeCount: undefined, message: "" },
      { onSuccess: () => reset() }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-1.5">
        <Label htmlFor="contactPerson">Full Name</Label>
        <Input id="contactPerson" placeholder="Jane Doe" {...register("contactPerson")} />
        {errors.contactPerson && (
          <p className="text-xs text-destructive">{errors.contactPerson.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" placeholder="+91 98765 43210" {...register("phone")} />
        {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
      </div>

      {isLeadBackendConfigured ? (
        <Button type="submit" size="lg" disabled={isPending} className="w-full">
          {isPending ? "Submitting..." : "Request Consultation"}
        </Button>
      ) : (
        <DirectContactFallback heading="Corporate enquiries are taken by phone and email" />
      )}

      {isSuccess && (
        <p className="text-sm font-medium text-primary">
          Thank you! Our corporate care team will reach out shortly.
        </p>
      )}
      {isError && (
        <DirectContactFallback
          tone="error"
          heading="That enquiry did not reach us"
          mailto={mailtoFor("corporate-inquiry", getValues())}
        />
      )}
    </form>
  );
}
