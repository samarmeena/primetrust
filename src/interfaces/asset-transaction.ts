export interface RawAssetTransaction {
  assetFee: number;
  assetTransactionType: string;
  assetTransferType: string;
  cashFee: number;
  comments1: string;
  comments2: string | null;
  comments3: string | null;
  comments4: string | null;
  createdAt: string;
  currencyType: string;
  data: string;
  effectiveAt: string;
  id: string;
  settledAt: string;
  settledOn: string;
  tradedOn: string;
  unitCount: number;
  unitCountActual: number;
}
