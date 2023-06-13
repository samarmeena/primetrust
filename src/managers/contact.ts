import type { PrimeTrustAPIClient } from "../client.js";
import type { OwnerPayload } from "../payloads/account.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import {
  convertKeysToSnakeCase,
  PrimeTrustError,
  PrimeTrustResponse,
} from "../utils/index.js";

export class ContactManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(
    payload: OwnerPayload,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.contacts>> {
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

    const response = new PrimeTrustResponse<PrimeTrustDataType.contacts>(resp);
    if (!response.one) {
      throw new PrimeTrustError("Failed to retrieve the resource");
    }

    return response.one;
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.contacts> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/contacts/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.contacts>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.contacts>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/contacts",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.contacts>(resp);

    return response;
  }

  async patch(data: {
    contactId: string;
    payload: Partial<OwnerPayload>;
  }): Promise<PrimeTrustEntry<PrimeTrustDataType.contacts>> {
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

    const response = new PrimeTrustResponse<PrimeTrustDataType.contacts>(resp);
    if (!response.one) {
      throw new PrimeTrustError("Failed to retrieve the resource");
    }

    return response.one;
  }
}
