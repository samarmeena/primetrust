import type { PrimeTrustAPIClient } from "../client.js";
import type { RawWebhook } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class WebhookManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawWebhook>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/webhooks/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawWebhook>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/webhooks",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
