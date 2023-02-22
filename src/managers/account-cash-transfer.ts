import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAccountCashTransfer } from "../interfaces/index.js";
import type { AccountCashTransferPayload } from "../payloads/index.js";
import { toCamelCase, toSnakeCase } from "../utils/index.js";

export class AccountCashTransferManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    params?: Record<string, string>
  ): Promise<RawAccountCashTransfer[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-cash-transfers",
    });

    const transform = (data: any) => ({
      ...toCamelCase(data.attributes),
      id: data.id,
    });

    return resp.data.map((d: any) => transform(d));
  }

  async getById(
    id: string,
    params?: Record<string, string>
  ): Promise<RawAccountCashTransfer> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-cash-transfers/${id}`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }

  async create(
    payload: AccountCashTransferPayload
  ): Promise<RawAccountCashTransfer> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: toSnakeCase(payload),
          type: "account-cash-transfers",
        },
      },
      method: "post",
      url: "/account-cash-transfers",
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }
}
