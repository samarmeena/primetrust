export interface RawCreditCardFailure {
  accountId: string;
  createdAt: Date;
  detail: string;
  errorCode: string;
  message: string;
  originId: string;
  originType: string;
  resourceTokenHash: string;
}
