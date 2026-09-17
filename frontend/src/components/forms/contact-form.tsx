"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSubmitContact } from "@/hooks/use-contact";
import { DirectContactFallback } from "@/components/forms/direct-contact-fallback";
import { isLeadBackendConfigured, mailtoFor } from "@/lib/forms/lead-delivery";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(8, "Please enter a valid phone number"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "" },
  });

  const { mutate, isPending, isSuccess, isError } = useSubmitContact();

  function onSubmit(values: ContactFormValues) {
    mutate(
      { ...values, email: "", subject: "", message: "" },
      { onSuccess: () => reset() }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-1.5">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="Jane Doe" {...register("name")} />
        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" placeholder="+91 98765 43210" {...register("phone")} />
        {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
      </div>

      {isLeadBackendConfigured ? (
        <Button type="submit" size="lg" disabled={isPending} className="w-full">
          {isPending ? "Sending..." : "Send Message"}
        </Button>
      ) : (
        <DirectContactFallback heading="Messages are answered by phone, WhatsApp and email" />
      )}

      {isSuccess && (
        <p className="text-sm font-medium text-primary">
          Thanks for reaching out. We&apos;ll get back to you soon.
        </p>
      )}
      {isError && (
        <DirectContactFallback
          tone="error"
          heading="That message did not reach us"
          mailto={mailtoFor("contact", getValues())}
        />
      )}
    </form>
  );
}
