import type { PrimeTrustAPIClient } from "../client.js";
import type { FundsTransferMethodPayload } from "../payloads/index.js";
import { PrimeTrustDataType } from "../types/enum/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { convertKeysToSnakeCase, PrimeTrustResponse } from "../utils/index.js";

export class FundsTransferMethodManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async deactivate(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.fundsTransferMethods>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/funds-transfer-methods/${id}/deactivate`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.fundsTransferMethods>(resp);

    return response.one;
  }

  async create(
    payload: FundsTransferMethodPayload,

    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.fundsTransferMethods>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: PrimeTrustDataType.fundsTransferMethods,
        },
      },
      method: "post",
      params: params,
      url: "/funds-transfer-methods",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.fundsTransferMethods>(resp);

    return response.one;
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.fundsTransferMethods>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/funds-transfer-methods/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.fundsTransferMethods>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.fundsTransferMethods>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/funds-transfer-methods",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.fundsTransferMethods>(resp);

    return response;
  }
}
