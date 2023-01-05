import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAccount } from "../interfaces/index.js";
import type { AccountPayload } from "../payloads/index.js";
import { toCamelCase, toSnakeCase } from "../utils/index.js";

export class AccountManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async createAgreementPreview(
    payload: AccountPayload
  ): Promise<{ content: string; id: string }> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: toSnakeCase(payload),
          type: "account",
        },
      },
      method: "post",
      url: "/agreement-previews",
    });

    return { content: resp.data.attributes.content, id: resp.data.id };
  }

  async create(payload: AccountPayload): Promise<RawAccount> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: toSnakeCase(payload),
          type: "account",
        },
      },
      method: "post",
      url: "/accounts",
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }

  async get(accountId: string): Promise<RawAccount> {
    const resp = await this.client.request<any>({
      url: `/accounts/${accountId}`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }
}
