import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class ContingentHoldManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.contingentHolds> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/contingent-holds/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.contingentHolds>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.contingentHolds>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/contingent-holds",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.contingentHolds>(
      resp
    );

    return response;
  }
}
