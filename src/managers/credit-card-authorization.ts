import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class CreditCardAuthorizationManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.creditCardAuthorizations> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/credit-card-authorizations/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.creditCardAuthorizations>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.creditCardAuthorizations>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/credit-card-authorizations",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.creditCardAuthorizations>(resp);

    return response;
  }
}
