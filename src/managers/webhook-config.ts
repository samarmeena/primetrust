import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class WebhookConfigManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.webhookConfigs> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/webhook-configs/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.webhookConfigs>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.webhookConfigs>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/webhook-configs",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.webhookConfigs>(
      resp
    );

    return response;
  }
}
