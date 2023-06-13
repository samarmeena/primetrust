import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class CountriesManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.countries>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/countries/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.countries>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.countries>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/countries",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.countries>(resp);

    return response;
  }
}
