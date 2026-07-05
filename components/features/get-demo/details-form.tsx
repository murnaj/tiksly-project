"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const detailsSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  url: z
    .union([z.literal(""), z.string().trim().url("Enter a valid URL")])
    .optional(),
  source: z.string().trim().min(1, "Tell us how you heard about us"),
});

export type DemoDetails = z.infer<typeof detailsSchema>;

export function DetailsForm({
  onSubmit,
}: {
  onSubmit: (values: DemoDetails) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DemoDetails>({
    resolver: zodResolver(detailsSchema),
    defaultValues: { name: "", email: "", url: "", source: "" },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 p-6 md:p-8"
      noValidate
    >
      <h2 className="text-lg font-semibold text-black">Enter Details</h2>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name">
          Name <span className="text-gray-400">*</span>
        </Label>
        <Input
          id="name"
          placeholder="Jane Doe"
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-[13px] text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">
          Email <span className="text-gray-400">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="jane@company.com"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-[13px] text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="url">URL</Label>
        <Input
          id="url"
          placeholder="https://yourcompany.com"
          aria-invalid={!!errors.url}
          {...register("url")}
        />
        {errors.url && (
          <p className="text-[13px] text-destructive">{errors.url.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="source">
          How did you hear about us? <span className="text-gray-400">*</span>
        </Label>
        <Input
          id="source"
          placeholder="Twitter, a friend, Google..."
          aria-invalid={!!errors.source}
          {...register("source")}
        />
        {errors.source && (
          <p className="text-[13px] text-destructive">
            {errors.source.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 h-11 w-full rounded-full bg-black text-[15px] font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-gray-800 active:scale-95 disabled:opacity-60"
      >
        {isSubmitting ? "Booking..." : "Join Demo"}
      </Button>
    </form>
  );
}
