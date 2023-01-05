import type { PrimeTrustAPIClient } from "../client.js";
import type { RawWebhook } from "../interfaces/index.js";
import { toCamelCase } from "../utils/index.js";

export class WebhookManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  /**
   * https://documentation.primetrust.com/#operation/GET__v2_webhooks
   * @param params
   * @returns
   */
  async get(params?: Record<string, string>): Promise<RawWebhook[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/webhooks",
    });

    const transform = (data: any) => ({
      ...toCamelCase(data.attributes),
      id: data.id,
    });

    return resp.data.map((d: any) => transform(d));
  }

  /**
   * https://documentation.primetrust.com/#operation/GET__v2_webhooks_webhook_id_
   * @param id
   * @param params
   * @returns
   */
  async getById(
    id: string,
    params?: Record<string, string>
  ): Promise<RawWebhook> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/webhooks/${id}`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }
}
