export interface RawCreditCardResource {
  contactId: string;
  fundsTransferMethodId: string;
  microserviceEnabled: boolean;
  reference: string;
  resourceTokenHash: string;
  status: string;
  threeDsRequired: boolean;
  token: string;
  vantivToken: string;
}
