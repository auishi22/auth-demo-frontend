import Link from "next/link";

export default function Home() {
   return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-10 shadow-xl border border-slate-200 text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          Auth Demo Frontend
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          This is the starter frontend for authentication learning project.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/login"
            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
          >
            Go to Login
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl bg-slate-200 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-300 transition"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
