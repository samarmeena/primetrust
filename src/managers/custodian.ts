import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class CustodianManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.custodians> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/custodians/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.custodians>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.custodians>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/custodians",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.custodians>(
      resp
    );

    return response;
  }
}
