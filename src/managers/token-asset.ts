import type { PrimeTrustAPIClient } from "../client.js";
import type { RawTokenAsset } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class TokenAssetManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawTokenAsset>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/token-assets/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawTokenAsset>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/token-assets",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
