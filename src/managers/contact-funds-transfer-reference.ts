import type { PrimeTrustAPIClient } from "../client.js";
import type { RawContactFundsTransferReference } from "../interfaces/index.js";
import type { ContactFundsTransferReferencePayload } from "../payloads/index.js";
import { convertKeysToSnakeCase, PrimeTrustResponse } from "../utils/index.js";

export class ContactFundsTransferReferenceManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(
    payload: ContactFundsTransferReferencePayload
  ): Promise<PrimeTrustResponse<RawContactFundsTransferReference>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "contact-funds-transfer-references",
        },
      },
      method: "post",
      url: "/contact-funds-transfer-references",
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawContactFundsTransferReference>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/contact-funds-transfer-references/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawContactFundsTransferReference>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/contact-funds-transfer-references",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
