import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-10">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-background via-background to-muted/40" />
      <div className="absolute inset-0 -z-10 opacity-60 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.25)_1px,transparent_0)] bg-size-[24px_24px]" />
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-2xl items-center justify-center">
        <div className="w-full rounded-3xl border border-border bg-card p-10 text-center shadow-2xl shadow-black/5 backdrop-blur-sm">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <span className="text-lg font-semibold">A</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-card-foreground sm:text-5xl">
            Auth Demo Frontend
          </h1>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
            This is the starter frontend for authentication learning project.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Go to Login
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
