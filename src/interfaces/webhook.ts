export interface RawWebhook {
  action: string;
  createdAt: string;
  data: string;
  failures: number;
  id: string;
  lastRequestAt: string;
  lastResponseCode: number;
  resourceId: string;
  resourceType: string;
  success: boolean;
}
