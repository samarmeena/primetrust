export interface RawCreditCardResource {
  contactId: string;
  fundsTransferMethodId: string | null;
  microserviceEnabled: boolean;
  reference: null;
  resourceTokenHash: string;
  status: string;
  threeDsRequired: boolean;
  token: string;
}
