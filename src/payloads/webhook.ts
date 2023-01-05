export interface WebhookConfigPayload {
  contactEmail?: string;
  enabled: boolean;
  sharedSecret: string;
  url: string;
}
