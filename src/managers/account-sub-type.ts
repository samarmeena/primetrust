import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAccountSubType } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AccountSubTypeManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountSubType>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-sub-types/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountSubType>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-sub-types",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
