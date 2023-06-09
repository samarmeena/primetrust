export interface RawAccountAssetTotal {
  accountName: string;
  contingentHold: number;
  disbursable: number;
  disbursableCold: number;
  disbursableHot: number;
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
