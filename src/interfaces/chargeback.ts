export interface RawChargeback {
  additionalNotes: string;
  bin: string;
  caseId: string;
  claimedAt: Date;
  createdAt: Date;
  dateReceived: Date;
  descriptionOfPurchase: string;
  disputeStatus: string;
  forfeitedAt: Date;
  holdId: string;
  lostAt: Date;
  proofOfPurchaseId: string;
  readyAt: Date;
  reasonCode: string;
  reference: string;
  rejectionReason: string;
  replyByDate: Date;
  startedAt: Date;
  status: string;
  submittedAt: Date;
  updatedAt: Date;
  wonAt: Date;
}
