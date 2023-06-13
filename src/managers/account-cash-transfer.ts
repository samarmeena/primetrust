import type { PrimeTrustAPIClient } from "../client.js";
import type { AccountCashTransferPayload } from "../payloads/index.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { convertKeysToSnakeCase, PrimeTrustResponse } from "../utils/index.js";

export class AccountCashTransferManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(
    payload: AccountCashTransferPayload,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.accountCashTransfers>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "account-cash-transfers",
        },
      },
      method: "post",
      params: params,
      url: "/account-cash-transfers",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.accountCashTransfers>(resp);

    return response.one;
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.accountCashTransfers>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-cash-transfers/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.accountCashTransfers>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.accountCashTransfers>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-cash-transfers",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.accountCashTransfers>(resp);

    return response;
  }
}
