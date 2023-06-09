import type { PrimeTrustAPIClient } from "../client.js";
import type { RawPhoneNumber } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class PhoneNumberManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawPhoneNumber>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/phone-numbers/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawPhoneNumber>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/phone-numbers",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
