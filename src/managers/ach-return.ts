import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AchReturnManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.achReturns> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/ach-returns/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.achReturns>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.achReturns>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/ach-returns",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.achReturns>(
      resp
    );

    return response;
  }
}
