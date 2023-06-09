import type { PrimeTrustAPIClient } from "../client.js";
import type { RawCreditCardAuthorization } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class CreditCardAuthorizationManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawCreditCardAuthorization>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/credit-card-authorizations/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawCreditCardAuthorization>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/credit-card-authorizations",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
