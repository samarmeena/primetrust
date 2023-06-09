import type { PrimeTrustAPIClient } from "../client.js";
import type { RawWebhookConfig } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class WebhookConfigManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawWebhookConfig>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/webhook-configs/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawWebhookConfig>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/webhook-configs",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
