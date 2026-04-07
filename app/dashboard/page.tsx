"use client";

import { authStorage } from "@/lib/auth-storage";
import { authService } from "@/lib/services/auth-service";
import { currentUser } from "@/lib/types/auth.types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState<currentUser | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const currenUser = async () => {
      try {
        const token = authStorage.getToken();
        if (token) {
          const res = await authService.getCurrentUser(token);
          // console.log("Current User:", res.data);
          setUser(res.data);
        } else {
          router.push("/login");
        }
      } catch (err) {
        // console.log("Error fetching current user:", err);
        authStorage.removeToken();
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };
    currenUser();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium text-slate-700">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="mt-1 text-sm text-slate-500">
              Welcome back , {user?.name || "User"}
            </p>
          </div>

          <button
            onClick={() => {
              authStorage.removeToken();
              router.push("/login");
            }}
            className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">User Name</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              {user?.name || "N/A"}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">Role</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              {user?.role || "N/A"}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">Meters Count</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              {user?.metersCount || 0}
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">Profile Info</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-800">Phone:</span>{" "}
                {user?.phone || "N/A"}
              </p>
              <p>
                <span className="font-semibold text-slate-800">
                  Created At:
                </span>{" "}
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">Quick Actions</h3>

            <div className="mt-4 flex flex-wrap gap-3">
              <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition">
                View Profile
              </button>

              <Link href="/dashboard/meter">
                <button className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-300 transition">
                  View Meters
                </button>
              </Link>

              <button className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-300 transition">
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
