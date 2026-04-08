"use client";

import { Button } from "@/components/ui/button";
import { useSingleMeter } from "@/lib/hooks/useMeter";
import { Pencil, Trash2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function MeterDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const meterId = params.meterId as string;

  const { data: meter, isLoading, error } = useSingleMeter(meterId);
  console.log(meter);

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-5xl mx-auto p-10 space-y-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          {/* Left */}
          <Button variant="outline" onClick={() => router.back()}>
            ← Back
          </Button>

          {/* Center */}
          <h1 className="text-2xl font-bold text-slate-800">Meter Details</h1>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Edit */}
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <Pencil className="w-4 h-4" />
            </Button>

            {/* Delete */}
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1 border hover:text-red-600"
            >
              <Trash2 className="w-4 h-4 " />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow p-6">
          {isLoading ? (
            <p className="text-center text-slate-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error.message}</p>
          ) : meter ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="p-4 border rounded-xl bg-slate-50">
                <p className="text-sm text-slate-500">Meter Name</p>
                <p className="text-lg font-semibold">{meter.meterName}</p>
              </div>

              <div className="p-4 border rounded-xl bg-slate-50">
                <p className="text-sm text-slate-500">Meter Type</p>
                <p className="text-lg font-semibold">
                  {meter.meterType === "PREPAID" ? "Prepaid" : "Postpaid"}
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-4 border rounded-xl bg-slate-50">
                <p className="text-sm text-slate-500">Account No</p>
                <p className="text-lg font-semibold">{meter.accountNo}</p>
              </div>

              <div className="p-4 border rounded-xl bg-slate-50">
                <p className="text-sm text-slate-500">Meter No</p>
                <p className="text-lg font-semibold">{meter.meterNo}</p>
              </div>

              {/* Balance (Highlight Card) */}
              <div className="flex justify-between p-6 text-2xl font-bold border rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white md:col-span-2">
                <p>Current Balance</p>
                <p>BDT {meter.balance}</p>
              </div>

              {/* Alerts */}
              <div className="p-4 border rounded-xl bg-slate-50">
                <p className="text-sm text-slate-500">Low Balance Alert</p>
                <p
                  className={`font-semibold ${
                    meter.isLowBalanceAlertEnabled
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {meter.isLowBalanceAlertEnabled ? "Enabled" : "Disabled"}
                </p>
              </div>

              <div className="p-4 border rounded-xl bg-slate-50">
                <p className="text-sm text-slate-500">Threshold Amount</p>
                <p className="text-lg font-semibold">
                  ৳ {meter.thresholdAmount}
                </p>
              </div>

              <div className="p-4 border rounded-xl bg-slate-50 md:col-span-2">
                <p className="text-sm text-slate-500">
                  Daily Consumption Alert
                </p>
                <p
                  className={`font-semibold ${
                    meter.isDailyConsumptionAlertEnabled
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {meter.isDailyConsumptionAlertEnabled
                    ? "Enabled"
                    : "Disabled"}
                </p>
              </div>

              {/* Created At */}
              <div className="p-4 border rounded-xl bg-slate-50 md:col-span-2">
                <p className="text-sm text-slate-500">Created At</p>
                <p className="text-lg font-semibold">
                  {new Date(meter.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-center text-slate-500">No data found</p>
          )}
        </div>
      </div>
    </main>
  );
}
