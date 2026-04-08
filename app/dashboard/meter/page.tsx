"use client";

import MeterTable from "./_components/MeterTable";
import { Button } from "@/components/ui/button";
import { MoveLeft, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAllMeters } from "@/lib/hooks/useMeter";
import { useState } from "react";
import MeterAddForm from "./_components/MeterAddForm";

export default function MetersPage() {
  const router = useRouter();
  const { data: meterData, isLoading: loading, error } = useAllMeters();
  const meters = meterData?.data || [];
  // console.log("Meter data from API:", meters);

  // Modal state and handlers
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   // Fetch meters from API and update state
  //   const getMeters = async () => {
  //     try {
  //       const res = await getAllMeters();
  //       setMeters(res.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching meters:", error);
  //       setError(error instanceof Error ? error.message : "An unknown error occurred");
  //       setLoading(false);
  //     }
  //   };
  //   getMeters();
  // }, []);

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl">
        <Button
          variant="outline"
          className="mb-4"
          onClick={() => router.back()}
        >
          <MoveLeft className="mr-2 h-4 w-4" /> back
        </Button>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-900">Your Meters</h1>

          <Button
            className="flex items-center gap-2"
            onClick={() => setOpen(true)}
          >
            <Plus className="w-4 h-4" />
            Add Meter
          </Button>
        </div>

        {/* Table for Meters */}
        {loading ? (
          <p className="text-center text-slate-500">Loading meters...</p>
        ) : error ? (
          <p className="text-center text-red-500">
            {error instanceof Error ? error.message : ""}
          </p>
        ) : (
          <MeterTable meters={meters} />
        )}
        {/* <MeterTable meters={meters} /> */}
        <MeterAddForm open={open} setOpen={setOpen} />
      </div>
    </main>
  );
}
