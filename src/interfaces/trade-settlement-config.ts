export interface RawTradeSettlementConfig {
  active: boolean;
  autoSettlementDays: number;
  autoSettlementTime: number;
  createdAt: Date;
  lastSettledAt: Date;
  rejectionDelayMinutes: number;
  settlementDelayMinutes: number;
  settlementRetryDelayMinutes: number;
  updatedAt: Date;
}
