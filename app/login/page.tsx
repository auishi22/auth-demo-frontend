"use client";

import { authStorage } from "@/lib/auth-storage";
import { authService } from "@/lib/services/auth-service";
import { loginPayload } from "@/lib/types/auth.types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";



export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginPayload>();
  const router = useRouter();

  const [error, setError] = useState("");

  const onSubmit = async (loginData: loginPayload) => {
     try{
      const res = await authService.login({
      phone : loginData.phone,
      password : loginData.password
     }) 

    //  save token in lacalStorage
    // console.log(res.data.token);
    const token = res.data.token;
    authStorage.setToken(token);
    router.push("/dashboard");
     }catch(err){
      // console.log("uuuuuuuuuu",err.response?.data?.message);
      if(err.response?.data?.message){
        setError(err.response.data.message);
      }

     }

  };
console.log(error)
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-slate-200 p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Login</h1>
          <p className="mt-2 text-sm text-slate-500">
            Enter your phone number and password
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Phone Number Input */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <input
              type="text"
              {...register("phone", { required: true, maxLength: 16 })}
              placeholder="+08801XXXXXXXXX"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500"
            />
            {errors.phone && (
              <p className="mt-1 text-[10px] text-red-500">
                Phone number is required and must be 16 characters long.
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500"
            />
            {errors.password && (
              <p className="mt-1 text-[10px] text-red-500">
                Password is required.
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-4 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
          >
            Login
          </button>
          {/* Error message display */}
          {error && (
            <p className="text-xs text-red-500 mt-2">{error}</p>
          )}
        </form>
      </div>
    </main>
  );
}
