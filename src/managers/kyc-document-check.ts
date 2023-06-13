import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class KycDocumentCheckManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.kycDocumentChecks> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/kyc-document-checks/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.kycDocumentChecks>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.kycDocumentChecks>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/kyc-document-checks",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.kycDocumentChecks>(resp);

    return response;
  }
}
