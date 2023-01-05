import type { WebhookConfigPayload } from "./webhook.js";

export interface AccountPayload {
  accountType: string;
  authorizedSignature: string;
  name: string;
  owner: OwnerPayload;
  webhookConfig?: WebhookConfigPayload;
}

export interface PrimaryAddressPayload {
  city: string;
  country: string;
  postalCode: string;
  region: string;
  street1: string;
  street2?: string;
}

export interface PrimaryPhoneNumberPayload {
  number: string;
  sms: boolean;
}

export interface OwnerPayload {
  contactType: string;
  dateOfBirth: string;
  email: string;
  firstName: string;
  geolocation?: string;
  ipAddress?: string;
  lastName: string;
  middleName: string;
  primaryAddress: PrimaryAddressPayload;
  primaryPhoneNumber: PrimaryPhoneNumberPayload;
  sex: string;
  socureDeviceId?: string;
  socureDocumentId?: string;
  taxCountry: string;
  taxIdNumber: string;
}
