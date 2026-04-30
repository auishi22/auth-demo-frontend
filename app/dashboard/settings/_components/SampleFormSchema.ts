import { z } from "zod";

export const sampleFormSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .min(2, "Full name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters")
    .refine(
      (val) => /[A-Z]/.test(val),
      "Password must contain at least one uppercase letter",
    )
    .refine(
      (val) => /[a-z]/.test(val),
      "Password must contain at least one lowercase letter",
    )
    .refine(
      (val) => /\d/.test(val),
      "Password must contain at least one number",
    )
    .refine(
      (val) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(val),
      "Password must contain at least one special character",
    ),
  age: z
    .number()
    .int()
    .min(1, "Age must be at least 1")
    .max(60, "Age must not exceed 60")
    .optional(),
  phone: z
    .string()
    .regex(/^\d{10,11}$/, "Phone must be 10-11 digits")
    .optional()
    .or(z.literal("")),
  website: z.string().url("Enter Invalid website URL").optional().or(z.literal("")),
  birthDate: z.string().optional(),
  meetingTime: z.string().optional(),
  reminderAt: z.string().optional(),
  billingMonth: z.string().optional(),
  targetWeek: z.string().optional(),
  volume: z.number().int().min(0).max(100),
  avatar: z.instanceof(FileList).optional().nullable(),
  country: z.string().min(1, "Please select a country").optional(),
  bio: z.string().max(500, "Bio must not exceed 500 characters").optional(),
  notificationType: z.enum(["email", "sms", "push", ""]).optional(),
  terms: z.boolean().refine((val) => val === true, "You must agree to terms"),
  
});

export type SampleFormValues = z.infer<typeof sampleFormSchema>;
