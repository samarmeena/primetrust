import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class TokenAssetManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.tokenAssets>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/token-assets/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.tokenAssets>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.tokenAssets>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/token-assets",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.tokenAssets>(
      resp
    );

    return response;
  }
}
