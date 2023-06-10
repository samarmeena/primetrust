import type { PrimeTrustAPIClient } from "../client.js";
import type { RawContact } from "../interfaces/index.js";
import type { OwnerPayload } from "../payloads/account.js";
import { convertKeysToSnakeCase, PrimeTrustResponse } from "../utils/index.js";

export class ContactManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(
    payload: OwnerPayload,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawContact>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "contacts",
        },
      },
      method: "post",
      params: params,
      url: "/contacts",
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawContact>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/contacts/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawContact>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/contacts",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }

  async patch(data: {
    contactId: string;
    payload: Partial<OwnerPayload>;
  }): Promise<PrimeTrustResponse<RawContact>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(data.payload),
          type: "contacts",
        },
      },
      method: "patch",
      url: `/contacts/${data.contactId}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }
}
