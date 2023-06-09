import type { PrimeTrustAPIClient } from "../client.js";
import type { RawContactBeneficiaries } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class ContactBeneficiariesManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawContactBeneficiaries>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/contact-beneficiaries/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawContactBeneficiaries>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/contact-beneficiaries",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
