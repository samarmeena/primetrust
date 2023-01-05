export interface QuotePayload {
  accountId: string;
  amount?: number;
  assetId: string;
  hot: boolean;
  transactionType: string;
  unitCount?: number;
}
