import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAccount } from "../interfaces/index.js";
import type { AccountPayload } from "../payloads/index.js";
import { convertKeysToSnakeCase, PrimeTrustResponse } from "../utils/index.js";

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
          attributes: convertKeysToSnakeCase(payload),
          type: "account",
        },
      },
      method: "post",
      url: "/agreement-previews",
    });

    return { content: resp.data.attributes.content, id: resp.data.id };
  }

  async create(
    payload: AccountPayload,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccount>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "account",
        },
      },
      method: "post",
      params: params,
      url: "/accounts",
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccount>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/accounts/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccount>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/accounts",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
