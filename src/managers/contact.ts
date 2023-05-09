import type { PrimeTrustAPIClient } from "../client.js";
import type { RawContact } from "../interfaces/index.js";
import type { OwnerPayload } from "../payloads/account.js";
import { toCamelCase, toSnakeCase } from "../utils/index.js";

export class ContactManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(payload: OwnerPayload): Promise<RawContact> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: toSnakeCase(payload),
          type: "contacts",
        },
      },
      method: "post",
      url: "/contacts",
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }

  async get(params?: Record<string, string>): Promise<RawContact[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/contacts",
    });

    const transform = (data: any) => ({
      ...toCamelCase(data.attributes),
      id: data.id,
    });

    return resp.data.map((d: any) => transform(d));
  }

  async patch(data: {
    contactId: string;
    payload: Partial<OwnerPayload>;
  }): Promise<RawContact> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: toSnakeCase(data.payload),
          type: "contacts",
        },
      },
      method: "patch",
      url: `/contacts/${data.contactId}`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }
}
