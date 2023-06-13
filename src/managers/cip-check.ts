import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class CipCheckManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.cipChecks> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/cip-checks/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.cipChecks>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.cipChecks>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/cip-checks",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.cipChecks>(resp);

    return response;
  }
}
