"use client";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="mt-1 text-sm text-slate-500">
              Welcome back. Here is your overview.
            </p>
          </div>

          <button className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 transition">
            Logout
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">User Name</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Auishi Saha
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">Role</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">USER</h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">Meters Count</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">0</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">Profile Info</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-800">Phone:</span>{" "}
                +8801765789787
              </p>
              <p>
                <span className="font-semibold text-slate-800">Created At:</span>{" "}
                2026-03-11
              </p>
              <p>
                <span className="font-semibold text-slate-800">Status:</span>{" "}
                Active
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">Quick Actions</h3>

            <div className="mt-4 flex flex-wrap gap-3">
              <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition">
                View Profile
              </button>

              <button className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-300 transition">
                View Meters
              </button>

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