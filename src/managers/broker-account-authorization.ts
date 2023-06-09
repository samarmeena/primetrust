import type { PrimeTrustAPIClient } from "../client.js";
import type { RawBrokerAccountAuthorization } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class BrokerAccountAuthorizationManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawBrokerAccountAuthorization>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/broker-account-authorizations/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawBrokerAccountAuthorization>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/broker-account-authorizations",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
