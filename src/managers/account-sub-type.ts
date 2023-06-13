import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AccountSubTypeManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.accountSubTypes>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-sub-types/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.accountSubTypes>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.accountSubTypes>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-sub-types",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.accountSubTypes>(
      resp
    );

    return response;
  }
}
