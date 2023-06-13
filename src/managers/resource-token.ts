import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class ResourceTokenManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.resourceTokens>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/resource-tokens/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.resourceTokens>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.resourceTokens>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/resource-tokens",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.resourceTokens>(
      resp
    );

    return response;
  }
}
