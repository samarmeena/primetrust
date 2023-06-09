import type { PrimeTrustAPIClient } from "../client.js";
import type { RawResourceToken } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class ResourceTokenManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawResourceToken>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/resource-tokens/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawResourceToken>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/resource-tokens",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
