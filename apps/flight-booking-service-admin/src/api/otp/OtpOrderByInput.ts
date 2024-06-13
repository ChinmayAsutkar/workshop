import { SortOrder } from "../../util/SortOrder";

export type OtpOrderByInput = {
  createdAt?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  otpCode?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
