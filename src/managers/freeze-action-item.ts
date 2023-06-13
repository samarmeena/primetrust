import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class FreezeActionItemManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.freezeActionItems>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/freeze-action-items/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.freezeActionItems>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.freezeActionItems>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/freeze-action-items",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.freezeActionItems>(resp);

    return response;
  }
}
