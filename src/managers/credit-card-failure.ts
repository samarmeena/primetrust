import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class CreditCardFailureManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.creditCardFailures> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/credit-card-failures/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.creditCardFailures>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.creditCardFailures>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/credit-card-failures",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.creditCardFailures>(resp);

    return response;
  }
}
