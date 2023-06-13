import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class WebhookManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.webhooks> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/webhooks/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.webhooks>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.webhooks>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/webhooks",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.webhooks>(resp);

    return response;
  }
}
