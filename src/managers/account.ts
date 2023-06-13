import type { PrimeTrustAPIClient } from "../client.js";
import type { AccountPayload } from "../payloads/index.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
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
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.accounts>> {
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

    const response = new PrimeTrustResponse<PrimeTrustDataType.accounts>(resp);

    return response.one;
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.accounts>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/accounts/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.accounts>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.accounts>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/accounts",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.accounts>(resp);

    return response;
  }
}
