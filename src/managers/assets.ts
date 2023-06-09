import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAsset } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AssetManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAsset>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/assets/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAsset>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/assets",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
