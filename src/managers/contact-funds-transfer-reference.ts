import type { PrimeTrustAPIClient } from "../client.js";
import type { RawContactFundsTransferReference } from "../interfaces/index.js";
import type { ContactFundsTransferReferencePayload } from "../payloads/index.js";
import { toCamelCase, toSnakeCase } from "../utils/index.js";

export class ContactFundsTransferReferenceManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    params?: Record<string, string>
  ): Promise<RawContactFundsTransferReference[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/contact-funds-transfer-references",
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
  ): Promise<RawContactFundsTransferReference> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/contact-funds-transfer-references/${id}`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }

  async create(
    payload: ContactFundsTransferReferencePayload
  ): Promise<RawContactFundsTransferReference> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: toSnakeCase(payload),
          type: "contact-funds-transfer-references",
        },
      },
      method: "post",
      url: "/contact-funds-transfer-references",
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }
}
