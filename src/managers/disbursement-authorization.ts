import type { PrimeTrustAPIClient } from "../client.js";
import type { RawDisbursementAuthorization } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class DisbursementAuthorizationManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawDisbursementAuthorization>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/disbursement-authorizations/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawDisbursementAuthorization>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/disbursement-authorizations",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
