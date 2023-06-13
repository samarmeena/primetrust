import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class ChargebackManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.chargebacks>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/chargebacks/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.chargebacks>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.chargebacks>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/chargebacks",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.chargebacks>(
      resp
    );

    return response;
  }
}
