import type { PrimeTrustAPIClient } from "../client.js";
import type { RawContribution } from "../interfaces/index.js";
import type { ContributionPayload } from "../payloads/index.js";
import { convertKeysToSnakeCase, PrimeTrustResponse } from "../utils/index.js";

export class ContributionManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(
    payload: ContributionPayload
  ): Promise<PrimeTrustResponse<RawContribution>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "contributions",
        },
      },
      method: "post",
      url: "/contributions",
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async createToken(
    payload: ContributionPayload
  ): Promise<PrimeTrustResponse<RawContribution>> {
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

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawContribution>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/contributions/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawContribution>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/contributions",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
