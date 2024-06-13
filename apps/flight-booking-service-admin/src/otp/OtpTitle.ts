import { Otp as TOtp } from "../api/otp/Otp";

export const OTP_TITLE_FIELD = "otpCode";

export const OtpTitle = (record: TOtp): string => {
  return record.otpCode?.toString() || String(record.id);
};
