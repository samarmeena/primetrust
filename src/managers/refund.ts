import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class RefundManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.refunds>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/refunds/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.refunds>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.refunds>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/refunds",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.refunds>(resp);

    return response;
  }
}
