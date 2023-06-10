import type { PrimeTrustAPIClient } from "../client.js";
import type { RawCreditCardResource } from "../interfaces/index.js";
import type { CreditCardResourcePayload } from "../payloads/index.js";
import { convertKeysToSnakeCase, PrimeTrustResponse } from "../utils/index.js";

export class CreditCardResourceManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(
    payload: CreditCardResourcePayload,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawCreditCardResource>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "credit-card-resources",
        },
      },
      method: "post",
      params: params,
      url: "/credit-card-resources",
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async disable(data: {
    id: string;
    reason: string;
  }): Promise<PrimeTrustResponse<RawCreditCardResource>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: { reason: data.reason },
          type: "credit-card-resources",
        },
      },
      method: "post",
      url: `/credit-card-resources/${data.id}/disable`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawCreditCardResource>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/credit-card-resources/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawCreditCardResource>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/credit-card-resources",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }

  async refreshToken(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawCreditCardResource>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/credit-card-resources/${id}/token`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }
}
