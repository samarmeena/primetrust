import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AchOriginatorManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.achOriginators> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/ach-originators/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.achOriginators>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.achOriginators>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/ach-originators",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.achOriginators>(
      resp
    );

    return response;
  }
}
