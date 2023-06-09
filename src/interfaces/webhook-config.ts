export interface RawWebhookConfig {
  contactEmail: string;
  createdAt: Date;
  enabled: boolean;
  failures: number;
  sharedSecret: string;
  updatedAt: Date;
  url: string;
}
