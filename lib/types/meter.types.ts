export type MeterType = "PREPAID" | "POSTPAID";

export interface Meter {
  id: string;
  meterName: string;
  accountNo: number;
  meterNo: string;
  meterType: MeterType;
  balance: number;
  isLowBalanceAlertEnabled: boolean;
  thresholdAmount: number;
  isDailyConsumptionAlertEnabled: boolean;
  createdAt: string;
}

export interface MeterResponse {
    success: boolean;
    message: string;
    data: Meter[];
}
