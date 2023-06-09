export interface RawIraTransferInForm {
  accountId: string;
  accountNumber: string;
  activityId: string;
  additionalDoc1Id: string;
  additionalDoc2Id: string;
  additionalDoc3Id: string;
  addressId: string;
  amount: string;
  createdAt: Date;
  custodianAccountName: string;
  custodianAccountNumber: string;
  custodianId: string;
  custodianName: string;
  deficiencies: string;
  deficiencyDetails: string[];
  externalAccountType: string;
  lastStatementId: string;
  paymentDeliveryMethod: string;
  phoneNumberId: string;
  processSubtype: string;
  processType: string;
  ptRequestFormId: string;
  status: string;
  statusDetails: string;
  transferType: string;
  updatedAt: Date;
}
