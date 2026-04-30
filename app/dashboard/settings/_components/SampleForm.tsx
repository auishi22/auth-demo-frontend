"use client";

import { useForm } from "react-hook-form";
import { sampleFormSchema, SampleFormValues } from "./SampleFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormLabel from "./FormLabel";

export default function SampleForm() {
  const form = useForm<SampleFormValues>({
    resolver: zodResolver(sampleFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      age: undefined,
      phone: "",
      website: "",
      birthDate: "",
      meetingTime: "",
      reminderAt: "",
      billingMonth: "",
      targetWeek: "",
      volume: 45,
      avatar: null,
      country: "",
      bio: "",
      notificationType: "",
      terms: false,
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  const onSubmit = (values: SampleFormValues) => {
    console.log("Settings form values:", values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <FormLabel htmlFor="fullName" required>
            Full Name (text)
          </FormLabel>
          <input
            id="fullName"
            type="text"
            placeholder="Enter full name"
            {...register("fullName")}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <FormLabel htmlFor="email" required>
            Email (email)
          </FormLabel>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            {...register("email")}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <FormLabel htmlFor="password" required>
             Password (password)
          </FormLabel>
          <input
            id="password"
            type="password"
            placeholder="********"
            {...register("password")}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <FormLabel htmlFor="age"> Age (number)</FormLabel>
          <input
            id="age"
            type="number"
            placeholder="25"
            {...register("age", {
              valueAsNumber: true,
              min: 1,
              max: 120,
            })}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <FormLabel htmlFor="phone">Phone (tel)</FormLabel>
          <input
            id="phone"
            type="tel"
            placeholder="01XXXXXXXXX"
            {...register("phone")}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <FormLabel htmlFor="website"> Website (url)</FormLabel>
          <input
            id="website"
            type="url"
            placeholder="https://example.com"
            {...register("website")}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500"
          />
          {errors.website && (
            <p className="text-red-500 text-sm mt-1">
              {errors.website.message}
            </p>
          )}
        </div>

        <div>
          <FormLabel htmlFor="birthDate"> Birth Date (date)</FormLabel>
          <input
            id="birthDate"
            type="date"
            {...register("birthDate")}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="meetingTime"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
           Meeting Time (time)
          </label>
          <input
            id="meetingTime"
            type="time"
            {...register("meetingTime")}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="reminderAt"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Reminder At (datetime-local)
          </label>
          <input
            id="reminderAt"
            type="datetime-local"
            {...register("reminderAt")}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="billingMonth"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Billing Month (month)
          </label>
          <input
            id="billingMonth"
            type="month"
            {...register("billingMonth")}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="targetWeek"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Target Week (week)
          </label>
          <input
            id="targetWeek"
            type="week"
            {...register("targetWeek")}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="avatar"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
             Avatar Upload (file)
          </label>
          <input
            id="avatar"
            type="file"
            accept="image/*"
            {...register("avatar")}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none transition file:mr-3 file:rounded-lg file:border-0 file:bg-slate-200 file:px-3 file:py-1 file:text-slate-700 hover:file:bg-slate-300"
          />
        </div>

        <div>
          <FormLabel htmlFor="country"> Country (select)</FormLabel>
          <select
            id="country"
            {...register("country")}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500"
          >
            <option value="">Select country</option>
            <option value="bd">Bangladesh</option>
            <option value="in">India</option>
            <option value="pk">Pakistan</option>
            <option value="np">Nepal</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <FormLabel htmlFor="bio"> Bio (textarea)</FormLabel>
          <textarea
            id="bio"
            rows={4}
            placeholder="Tell us a little about yourself"
            {...register("bio")}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <p className="mb-2 block text-sm font-medium text-slate-700">
             Notification Type (radio)
          </p>
          <div className="flex flex-wrap gap-5 rounded-xl border border-slate-300 p-3">
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="radio"
                value="email"
                {...register("notificationType")}
                className="accent-blue-600"
              />
              Email
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="radio"
                value="sms"
                {...register("notificationType")}
                className="accent-blue-600"
              />
              SMS
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="radio"
                value="push"
                {...register("notificationType")}
                className="accent-blue-600"
              />
              Push
            </label>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 rounded-xl border border-slate-300 p-3 text-sm text-slate-700">
            <input
              type="checkbox"
              {...register("terms")}
              className="accent-blue-600"
            />
             I agree to terms (checkbox){" "}
          </label>
        </div>

      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Save Settings
        </button>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-xl bg-slate-200 px-5 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-300"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
