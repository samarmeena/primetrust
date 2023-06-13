import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class PlaidItemManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.plaidItems> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/plaid-items/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.plaidItems>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.plaidItems>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/plaid-items",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.plaidItems>(
      resp
    );

    return response;
  }
}
