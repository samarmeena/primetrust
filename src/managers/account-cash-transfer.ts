import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAccountCashTransfer } from "../interfaces/index.js";
import type { AccountCashTransferPayload } from "../payloads/index.js";
import { convertKeysToSnakeCase, PrimeTrustResponse } from "../utils/index.js";

export class AccountCashTransferManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(
    payload: AccountCashTransferPayload,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountCashTransfer>> {
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

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountCashTransfer>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-cash-transfers/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountCashTransfer>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-cash-transfers",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
