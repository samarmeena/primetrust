export interface RawFreezeAction {
  code: string;
  description: string;
}

export interface RawAccount {
  contributionsFrozen: boolean;
  createdAt: string;
  disbursementsFrozen: boolean;
  freezeNotRequiredActions: RawFreezeAction[];
  freezeRequiredActions: RawFreezeAction[];
  name: string;
  number: string;
  offlineColdStorage: boolean | null;
  organizationLabel: string;
  solidFreeze: boolean;
  statements: boolean;
  status: string;
  updatedAt: string;
  uploadedDocumentIds: string[];
}
