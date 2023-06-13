import type { PrimeTrustAPIClient } from "../client.js";
import type { ContributionPayload } from "../payloads/index.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { convertKeysToSnakeCase, PrimeTrustResponse } from "../utils/index.js";

export class ContributionManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(
    payload: ContributionPayload,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.contributions>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "contributions",
        },
      },
      method: "post",
      params: params,
      url: "/contributions",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.contributions>(
      resp
    );

    return response.one;
  }

  async createToken(
    payload: ContributionPayload
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.contributions>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "contributions",
        },
      },
      method: "post",
      url: "/contributions/token",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.contributions>(
      resp
    );

    return response.one;
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.contributions>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/contributions/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.contributions>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.contributions>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/contributions",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.contributions>(
      resp
    );

    return response;
  }
}
