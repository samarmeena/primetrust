import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class DisbursementAuthorizationManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.disbursementAuthorizations>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/disbursement-authorizations/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.disbursementAuthorizations>(
        resp
      );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<
    PrimeTrustResponse<PrimeTrustDataType.disbursementAuthorizations>
  > {
    const resp = await this.client.request<any>({
      params: params,
      url: "/disbursement-authorizations",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.disbursementAuthorizations>(
        resp
      );

    return response;
  }
}
