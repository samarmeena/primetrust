export interface RawTrade {
  acceptor: TradeInputs;
  acceptorAmount: number;
  acceptorAssetBuyTransactionId: string | null;
  acceptorAssetSellTransactionId: string | null;
  acceptorCashTransactionId: string | null;
  acceptorCurrencyType: string | null;
  brokerAccountId: string | null;
  brokerReference: string | null;
  cancelledAt: string | null;
  createdAt: string;
  expiresAt: string;
  initiator: TradeInputs;
  initiatorAmount: number;
  initiatorAssetBuyTransactionId: string | null;
  initiatorAssetSellTransactionId: string | null;
  initiatorCashTransactionId: string | null;
  initiatorCurrencyType: string;
  requireInstantSettlement: boolean;
  settledAt: string | null;
  status: string;
}

export interface TradeInputs {
  accountId: string;
  amount: number;
  assetBuyTransactionId: string | null;
  assetId: string | null;
  assetSellTransactionId: string | null;
  cashTransactionId: string | null;
  currencyType: string;
  feeAmount: number;
}
