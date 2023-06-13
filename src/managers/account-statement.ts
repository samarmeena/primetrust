import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AccountStatementManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.accountStatements> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-statements/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.accountStatements>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.accountStatements>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-statements",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.accountStatements>(resp);

    return response;
  }
}
