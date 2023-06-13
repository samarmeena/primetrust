import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class RuleManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.rules>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/rules/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.rules>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.rules>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/rules",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.rules>(resp);

    return response;
  }
}
