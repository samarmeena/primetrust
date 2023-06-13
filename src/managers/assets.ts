import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AssetManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.assets> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/assets/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.assets>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.assets>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/assets",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.assets>(resp);

    return response;
  }
}
