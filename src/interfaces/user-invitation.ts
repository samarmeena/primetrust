export interface RawUserInvitation {
  acceptedAt: Date;
  createdAt: Date;
  email: string;
  message: string;
  name: string;
  permissions: string[];
  resourceId: string;
  resourceType: string;
  sentAt: Date;
  status: string;
}
