import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAccountType } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AccountTypeManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountType>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-types/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountType>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-types",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
