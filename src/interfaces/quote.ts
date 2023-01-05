export interface RawQuote {
  assetName: string;
  baseAmount: number;
  createdAt: string;
  delayedSettlement: boolean;
  executedAt: null;
  expiresAt: string;
  feeAmount: number;
  hot: boolean;
  id: string;
  integratorSettled: boolean;
  pricePerUnit: number;
  rejectedAt: null;
  settledAt: null;
  status: string;
  totalAmount: number;
  tradeID: null;
  transactionType: string;
  unitCount: number;
}
