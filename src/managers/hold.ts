import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class HoldManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.holds>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/holds/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.holds>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.holds>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/holds",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.holds>(resp);

    return response;
  }
}
