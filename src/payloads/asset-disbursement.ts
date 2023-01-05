export interface AssetDisbursementPayload {
  accountId: string;
  assetId: string;
  assetTransfer: { assetTransferMethodId: string };
  contactId: string;
  unitCount: string;
}
