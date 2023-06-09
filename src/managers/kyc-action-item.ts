import type { PrimeTrustAPIClient } from "../client.js";
import type { RawKycActionItem } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class KycActionItemManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawKycActionItem>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/kyc-action-items/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawKycActionItem>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/kyc-action-items",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
