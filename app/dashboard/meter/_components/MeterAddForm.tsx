"use client";

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
import { MeterCreatePayload } from "@/lib/types/meter.types";
import { useCreateMeter } from "@/lib/hooks/useMeter";

interface CreateMeterModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function MeterAddForm({ open, setOpen }: CreateMeterModalProps) {
  const {
    register,
    handleSubmit,
    watch,
    reset: resetForm,
  } = useForm<MeterCreatePayload>();

  const {
    mutate: createMeter,
    isPending,
    error,
    reset: resetCreateMeter,
  } = useCreateMeter();

  const onSubmit = (data: MeterCreatePayload) => {
    resetCreateMeter();

    const payload: MeterCreatePayload = {
      meterName: data.meterName,
      accountNo: data.accountNo,
      meterNo: data.meterNo,
      meterType: data.meterType,
      thresholdAmount: data.thresholdAmount || 0,
      isDailyConsumptionAlertEnabled:
        data.isDailyConsumptionAlertEnabled || false,
      isLowBalanceAlertEnabled: data.isLowBalanceAlertEnabled || false,
    };
    createMeter(payload, {
      onSuccess: () => {
        setOpen(false);
        resetForm();
      },
    });
    console.log("Form Data:", data);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Modal */}
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create New Meter</DialogTitle>
        </DialogHeader>

        {/* Form */}
        <form className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Meter Name */}
          <div className="space-y-2">
            <Label>Meter Name</Label>
            <Input {...register("meterName")} placeholder="Enter meter name" />
          </div>

          {/* Account No */}
          <div className="space-y-2">
            <Label>Account No</Label>
            <Input
              {...register("accountNo", { required: true })}
              type="number"
              placeholder="Enter account number"
            />
          </div>

          {/* Meter No */}
          <div className="space-y-2">
            <Label>Meter No</Label>
            <Input
              {...register("meterNo", { required: true })}
              placeholder="Enter meter number"
            />
          </div>

          {/* Meter Type */}
          <div className="space-y-2">
            <Label>Meter Type</Label>
            <select
              {...register("meterType")}
              className="w-full border rounded-md p-2"
            >
              <option value="PREPAID">Prepaid</option>
              <option value="POSTPAID">Postpaid</option>
            </select>
          </div>

          {/* Threshold */}
          {/* <div>
            <Label>Threshold Amount</Label>
            <Input {...register("threshold")} type="number" placeholder="Enter threshold" />
          </div> */}

          {/* CheckBox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isDailyConsumptionAlertEnabled"
              {...register("isDailyConsumptionAlertEnabled")}
            />
            <Label htmlFor="isDailyConsumptionAlertEnabled">
              Daily Consumption Alert
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isLowBalanceAlertEnabled"
              {...register("isLowBalanceAlertEnabled")}
            />
            <Label htmlFor="isLowBalanceAlertEnabled">Low Balance Alert</Label>
          </div>
          { watch("isLowBalanceAlertEnabled") && (
            <div>
              <Label>Threshold Amount</Label>
              <Input
                {...register("thresholdAmount")}
                type="number"
                placeholder="Enter threshold"
              />
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                resetCreateMeter();
                resetForm();
                setOpen(false);
              }}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={isPending}>
              {isPending ? "Creating..." : "Create Meter"}
            </Button>
          </div>
          {error && (
            <p className="text-xs text-red-500 text-right">{error.message}</p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
