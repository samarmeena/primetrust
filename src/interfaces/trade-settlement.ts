export interface RawTradeSettlement {
  assetExposures: string;
  cashExposure: string;
  createdAt: Date;
  currentExposures: string;
  nextSettlementAt: Date;
  organizationId: string;
  rejectedAt: Date;
  settledAt: Date;
  status: string;
  tradeSettlementConfigId: string;
  updatedAt: Date;
}
