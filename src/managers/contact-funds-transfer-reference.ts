import type { PrimeTrustAPIClient } from "../client.js";
import type { ContactFundsTransferReferencePayload } from "../payloads/index.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import {
  convertKeysToSnakeCase,
  PrimeTrustError,
  PrimeTrustResponse,
} from "../utils/index.js";

export class ContactFundsTransferReferenceManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(
    payload: ContactFundsTransferReferencePayload,
    params?: Record<string, string>
  ): Promise<
    PrimeTrustEntry<PrimeTrustDataType.contactFundsTransferReferences>
  > {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "contact-funds-transfer-references",
        },
      },
      method: "post",
      params: params,
      url: "/contact-funds-transfer-references",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.contactFundsTransferReferences>(
        resp
      );

    if (!response.one) {
      throw new PrimeTrustError("Failed to retrieve the resource");
    }

    return response.one;
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<
    | PrimeTrustEntry<PrimeTrustDataType.contactFundsTransferReferences>
    | undefined
  > {
    const resp = await this.client.request<any>({
      params: params,
      url: `/contact-funds-transfer-references/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.contactFundsTransferReferences>(
        resp
      );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<
    PrimeTrustResponse<PrimeTrustDataType.contactFundsTransferReferences>
  > {
    const resp = await this.client.request<any>({
      params: params,
      url: "/contact-funds-transfer-references",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.contactFundsTransferReferences>(
        resp
      );

    return response;
  }
}
