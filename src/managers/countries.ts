import type { PrimeTrustAPIClient } from "../client.js";
import type { RawCountries } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class CountriesManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawCountries>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/countries/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawCountries>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/countries",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}