export interface RawAssetTransfer {
  cancelledAt: string | null;
  chargeAccountId: string | null;
  contingenciesClearedAt: string;
  contingenciesClearedOn: string;
  createdAt: string;
  hotTransfer: boolean;
  id: string;
  reconciledAt: string | null;
  settlementDetails: string;
  status: string;
  transactionHash: string | null;
  unitCount: number;
  unitCountExpected: number;
}
