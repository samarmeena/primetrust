import type { PrimeTrustAPIClient } from "../client.js";
import type { RawFundsTransferMethod } from "../interfaces/index.js";
import type { FundsTransferMethodPayload } from "../payloads/index.js";
import { toCamelCase, toSnakeCase } from "../utils/index.js";

export class FundsTransferMethodManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    params?: Record<string, string>
  ): Promise<RawFundsTransferMethod[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/funds-transfer-methods",
    });

    const transform = (data: any) => ({
      ...toCamelCase(data.attributes),
      contactId: data.relationships["contact"]?.data?.id ?? null,
      creditCardResourceId:
        data.relationships["credit-card-resource"]?.data?.id ?? null,
      id: data.id,
    });

    return resp.data.map((d: any) => transform(d));
  }

  async getById(
    id: string,
    params?: Record<string, string>
  ): Promise<RawFundsTransferMethod> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/funds-transfer-methods/${id}`,
    });

    return {
      ...toCamelCase(resp.data.attributes),
      contactId: resp.data.relationships.contact?.data?.id ?? null,
      creditCardResourceId:
        resp.data.relationships["credit-card-resource"]?.data?.id ?? null,
      id: resp.data.id,
    };
  }

  async create(
    payload: FundsTransferMethodPayload
  ): Promise<RawFundsTransferMethod> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: toSnakeCase(payload),
          type: "funds-transfer-methods",
        },
      },
      method: "post",
      url: "/funds-transfer-methods",
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }
}
