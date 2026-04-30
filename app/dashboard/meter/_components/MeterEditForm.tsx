"use client";

import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Meter, MeterEditPayload } from "@/lib/types/meter.types";
import { useEditMeter } from "@/lib/hooks/useMeter";

interface EditMeterModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  meterData: Meter | null; // Pre-filled meter data for editing
}

export default function MeterEditForm({
  open,
  setOpen,
  meterData,
}: EditMeterModalProps) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<MeterEditPayload>();

  const {
    mutate: updateMeter,
    isPending,
    error,
  } = useEditMeter(meterData?.id || "");

  // Populate the form fields with existing meter data
  useEffect(() => {
    if (meterData) {
      reset(meterData); // Reset form data when modal is opened with existing data
    }
  }, [meterData, reset]);

  const onSubmit = (data: MeterEditPayload) => {
    console.log("Form Data:", data);
    // Call the API or mutate here to update meter
    const payload: MeterEditPayload = {
      ...data,
      id: meterData?.id || "",
    };
    updateMeter(payload, {
      onSuccess: () => {
        setOpen(false);
        reset();
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Meter</DialogTitle>
        </DialogHeader>

        {/* Form */}
        <form className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Meter Name */}
          <div className="space-y-2">
            <Label>Meter Name</Label>
            <Input
              {...register("meterName", { required: "Meter name is required" })}
              placeholder="Enter meter name"
            />
            {errors.meterName && (
              <p className="text-red-500">{errors.meterName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Account No</Label>
            <Input value={meterData?.accountNo ?? ""} disabled />
          </div>

          <div className="space-y-2">
            <Label>Meter No</Label>
            <Input value={meterData?.meterNo ?? ""} disabled />
          </div>

          <div className="space-y-2">
            <Label>Meter Type</Label>
            <Input value={meterData?.meterType ?? ""} disabled />
          </div>

          {/* Low Balance Alert */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="lowBalanceAlert"
              {...register("isLowBalanceAlertEnabled")}
            />
            <Label htmlFor="lowBalanceAlert">Low Balance Alert</Label>
          </div>

          {/* Show Threshold Amount only if Low Balance Alert is enabled */}
          {watch("isLowBalanceAlertEnabled") && (
            <div className="space-y-2">
              <Label>Threshold Amount</Label>
              <Input
                {...register("thresholdAmount", { valueAsNumber: true })}
                type="number"
                placeholder="Enter threshold"
              />
            </div>
          )}

          {/* Daily Consumption Alert */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="dailyConsumptionAlert"
              {...register("isDailyConsumptionAlertEnabled")}
            />
            <Label htmlFor="dailyConsumptionAlert">
              Daily Consumption Alert
            </Label>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Updating..." : "Update "}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
