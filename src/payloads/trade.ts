export interface TradePayload {
  acceptor: currency | Asset;
  expiresAt: string;
  initiator: currency | Asset;
}

export interface currency {
  accountId: string;
  amount: string;
  currencyType: string;
}

export interface Asset {
  accountId: string;
  amount: string;
  assetId: string;
  marketValueAmount?: string;
}
