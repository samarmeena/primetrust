export interface RawQuote {
  assetName: string;
  baseAmount: number;
  createdAt: string;
  delayedSettlement: boolean;
  executedAt: string | null;
  expiresAt: string;
  feeAmount: number;
  hot: boolean;
  integratorSettled: boolean;
  pricePerUnit: number;
  rejectedAt: string | null;
  settledAt: string | null;
  status: string;
  totalAmount: number;
  tradeId: string | null;
  transactionType: string;
  unitCount: number;
}
