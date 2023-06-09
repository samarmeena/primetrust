export interface RawKycRequiredAction {
  code: string;
  description: string;
}

export interface RawContact {
  accountRoles: string[];
  amlCleared: boolean;
  cipCleared: boolean;
  contactType: string;
  contributionsFrozen: boolean;
  createdAt: string;
  dateOfBirth: string;
  dateOfIncorporation: null;
  descriptionOfServices: null;
  disbursementsFrozen: boolean;
  duplicatedFromContactId: null;
  email: string;
  entitySubType: null;
  etContactId: null;
  firstName: string;
  geolocation: null;
  identityConfirmed: boolean;
  identityDocumentsVerified: boolean;
  identityFingerprint: string;
  integratorNotes: null;
  ipAddress: string | null;
  jurisdictionsOfBusinessActivity: null;
  kycRequiredActions: RawKycRequiredAction[];
  lastName: string;
  maritalStatus: null;
  middleName: string;
  name: string;
  proofOfAddressDocumentsVerified: boolean;
  readyForReview: boolean;
  regionOfFormation: null;
  reviewDetails: null;
  sex: string | null;
  socureDeviceId: string;
  socureDocumentId: string;
  taxCountry: string;
  taxIdNumber: string;
  taxState: string;
  type: string;
  updatedAt: string;
}
