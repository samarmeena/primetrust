import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AccountTypeManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.accountTypes> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-types/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.accountTypes>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.accountTypes>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-types",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.accountTypes>(
      resp
    );

    return response;
  }
}
