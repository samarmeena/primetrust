import type { PrimeTrustAPIClient } from "../client.js";
import type { RawPlaidItem } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class PlaidItemManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawPlaidItem>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/plaid-items/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawPlaidItem>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/plaid-items",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
