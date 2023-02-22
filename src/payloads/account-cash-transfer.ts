export interface AccountCashTransferPayload {
  amount: string;
  currencyType?: string;
  fromAccountId: string;
  reference?: string;
  toAccountId: string;
}
