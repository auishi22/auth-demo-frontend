import Link from "next/link";
import SampleForm from "./_components/SampleForm";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
            <p className="mt-1 text-sm text-slate-500">
              Profile, preferences, security and notification settings.
            </p>
          </div>

          <Link
            href="/dashboard"
            className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-300"
          >
            Back to Dashboard
          </Link>
        </div>

        <SampleForm />
      </div>
    </main>
  );
}
