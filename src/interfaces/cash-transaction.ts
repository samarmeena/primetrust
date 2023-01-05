export interface RawCashTransaction {
  amount: number;
  comments1: string;
  comments2: string | null;
  comments3: string | null;
  comments4: string | null;
  createdAt: string;
  currencyType: string;
  effectiveAt: string;
  fundsTransferType: string;
  id: string;
  opsReference: null;
  settledAt: string;
  settledOn: string;
  specialType: null;
}
