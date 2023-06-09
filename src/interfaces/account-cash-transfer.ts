export interface RawAccountCashTransfer {
  amount: number;
  createdAt: string;
  currencyType: string;
  fromAccountId: string;
  reference?: string;
  reversalDetails: string | null;
  status: string;
  toAccountId: string;
  type: string;
}
