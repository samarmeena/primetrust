export interface RawAccountAssetTotal {
  accountName: string;
  assetId: string | null;
  contingentHold: number;
  disbursable: number;
  disbursableCold: number;
  disbursableHot: number;
  id: string;
  name: string;
  nonContingentHold: number;
  nonContingentHoldCold: number;
  nonContingentHoldHot: number;
  pendingSettlement: number;
  pendingTransfer: number;
  pendingTransferCold: number;
  pendingTransferHot: number;
  settled: number;
  settledCold: number;
  settledHot: number;
}
