import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class BrokerAccountAuthorizationManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.brokerAccountAuthorizations>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/broker-account-authorizations/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.brokerAccountAuthorizations>(
        resp
      );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<
    PrimeTrustResponse<PrimeTrustDataType.brokerAccountAuthorizations>
  > {
    const resp = await this.client.request<any>({
      params: params,
      url: "/broker-account-authorizations",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.brokerAccountAuthorizations>(
        resp
      );

    return response;
  }
}
