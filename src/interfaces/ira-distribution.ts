export interface RawIraDistribution {
  accountId: string;
  activityId: string;
  createdAt: Date;
  deficiencies: string;
  deficiencyDetails: string[];
  distributionAmount: string;
  distributionReason: string;
  federalWithholding: boolean;
  federalWithholdingAmount: string;
  fundsTransferMethodId: string;
  processSubtype: string;
  processType: string;
  reviewedByUserId: string;
  signedRequestDocumentId: string;
  stateWithholding: boolean;
  stateWithholdingAmount: string;
  status: string;
  statusDetails: string;
  updatedAt: Date;
}
