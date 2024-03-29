export interface AssetTransferMethodIncomingPayload {
  accountId: string;
  assetId: string;
  assetTransferType: string;
  contactId: string;
  singleUse: boolean;
  transferDirection: "incoming";
}

export interface AssetTransferMethodOutgoingPayload {
  accountId: string;
  assetId: string;
  assetTransferType: string;
  contactId: string;
  label?: string;
  singleUse: boolean;
  transferDirection: "outgoing";
  walletAddress: string;
}

export interface AssetTransferMethodPatchPayload {
  acquisitionOn?: Date;
  constBasis?: string;
  currencyType?: string;
  inactive?: boolean;
  label?: string;
}
