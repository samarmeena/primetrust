export interface RawAssetTransfer {
  cancelledAt: string | null;
  chargeAccountId: string | null;
  contingenciesClearedAt: string;
  contingenciesClearedOn: string;
  createdAt: string;
  hotTransfer: boolean;
  reconciledAt: string | null;
  settlementDetails: string;
  status: string;
  transactionHash: string | null;
  unitCount: number;
  unitCountExpected: number;
}
