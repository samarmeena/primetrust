export interface RawKycDocumentCheck {
  createdAt: string;
  exceptions: string[];
  expiresOn: string;
  failureDetails: string;
  identity: boolean;
  identityPhoto: boolean;
  kycDocumentCountry: string;
  kycDocumentOtherType: null;
  kycDocumentType: string;
  parsedDateOfBirth: string;
  parsedDocumentNumber: string;
  parsedName: string;
  parsedPhysicalAddress: null;
  proofOfAddress: boolean;
  socureExceptionDetails: null;
  socureReferenceId: string;
  status: string;
  updatedAt: string;
}
