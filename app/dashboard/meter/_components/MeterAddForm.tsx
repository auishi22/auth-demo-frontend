"use client";

import { useState } from "react";
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

interface CreateMeterModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function MeterAddForm({ open, setOpen }: CreateMeterModalProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const lowBalanceAlert = watch("lowBalanceAlert");

  const onSubmit = (data) => {
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
          <div>
            <Label>Meter Name</Label>
            <Input {...register("meterName")} placeholder="Enter meter name" />
          </div>

          {/* Account No */}
          <div>
            <Label>Account No</Label>
            <Input
              {...register("accountNo", { required: true })}
              type="number"
              placeholder="Enter account number"
            />
          </div>

          {/* Meter No */}
          <div>
            <Label>Meter No</Label>
            <Input
              {...register("meterNo", { required: true })}
              placeholder="Enter meter number"
            />
          </div>

          {/* Meter Type */}
          <div>
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
              id="dailyConsumptionAlert"
              {...register("dailyConsumptionAlert")}
            />
            <Label htmlFor="dailyConsumptionAlert">
              Daily Consumption Alert
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="lowBalanceAlert"
              {...register("lowBalanceAlert")}
            />
            <Label htmlFor="lowBalanceAlert">Low Balance Alert</Label>
          </div>
          {lowBalanceAlert && (
            <div>
              <Label>Threshold Amount</Label>
              <Input
                {...register("threshold")}
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
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button type="submit">Create Meter</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
