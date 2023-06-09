import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAddress } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AddressManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAddress>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/addresses/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAddress>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/addresses",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
