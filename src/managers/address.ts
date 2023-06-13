import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AddressManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.addresses> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/addresses/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.addresses>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.addresses>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/addresses",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.addresses>(resp);

    return response;
  }
}
