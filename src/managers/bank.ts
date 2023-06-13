import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class BankManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.banks>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/banks/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.banks>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.banks>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/banks",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.banks>(resp);

    return response;
  }
}
