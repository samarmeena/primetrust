export interface RawResourceToken {
  createdAt: Date;
  createdByUserId: string;
  data: string;
  expiresAt: Date;
  resourceId: string;
  resourceTokenType: string;
  resourceType: string;
  token: string;
  usedAt: Date;
}
