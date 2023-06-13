import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class ContactBeneficiariesManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.contactBeneficiaries>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/contact-beneficiaries/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.contactBeneficiaries>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.contactBeneficiaries>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/contact-beneficiaries",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.contactBeneficiaries>(resp);

    return response;
  }
}
