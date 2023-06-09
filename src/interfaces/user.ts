export interface RawUser {
  claims: string;
  createdAt: Date;
  disabled: boolean;
  email: string;
  mfaTypes: string[];
  name: string;
  updatedAt: Date;
}
