import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAccountTransferAuthorization } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AccountTransferAuthorizationManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountTransferAuthorization>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-transfer-authorizations/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountTransferAuthorization>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-transfer-authorizations",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
