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

export interface MeterCreatePayload {
  meterName: string;
  accountNo: number;
  meterNo: string;
  meterType: MeterType;
  isLowBalanceAlertEnabled: boolean;
  thresholdAmount: number;
  isDailyConsumptionAlertEnabled: boolean;
}

export interface MeterCreateResponse {
  success: boolean;
  message: string;
  data: Meter;
}

export interface MeterDeleteResponse {
  success: boolean;
  message: string;
}

export interface MeterEditPayload {
  id: string;
  meterName: string;
  isLowBalanceAlertEnabled: boolean;
  thresholdAmount: number;
  isDailyConsumptionAlertEnabled: boolean;
}
