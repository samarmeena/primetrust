import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AccountTransferAuthorizationManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<
    | PrimeTrustEntry<PrimeTrustDataType.accountTransferAuthorizations>
    | undefined
  > {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-transfer-authorizations/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.accountTransferAuthorizations>(
        resp
      );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<
    PrimeTrustResponse<PrimeTrustDataType.accountTransferAuthorizations>
  > {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-transfer-authorizations",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.accountTransferAuthorizations>(
        resp
      );

    return response;
  }
}
