import type { PrimeTrustAPIClient } from "../client.js";
import type { CreditCardResourcePayload } from "../payloads/index.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { convertKeysToSnakeCase, PrimeTrustResponse } from "../utils/index.js";

export class CreditCardResourceManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(
    payload: CreditCardResourcePayload,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.creditCardResources>> {
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

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.creditCardResources>(resp);

    return response.one;
  }

  async disable(data: {
    id: string;
    reason: string;
  }): Promise<PrimeTrustEntry<PrimeTrustDataType.creditCardResources>> {
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

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.creditCardResources>(resp);

    return response.one;
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.creditCardResources>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/credit-card-resources/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.creditCardResources>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.creditCardResources>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/credit-card-resources",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.creditCardResources>(resp);

    return response;
  }

  async refreshToken(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.creditCardResources>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/credit-card-resources/${id}/token`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.creditCardResources>(resp);

    return response.one;
  }
}
