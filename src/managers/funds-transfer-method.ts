import type { PrimeTrustAPIClient } from "../client.js";
import type { RawFundsTransferMethod } from "../interfaces/index.js";
import type { FundsTransferMethodPayload } from "../payloads/index.js";
import { PrimeTrustDataType } from "../types/enum.js";
import { convertKeysToSnakeCase, PrimeTrustResponse } from "../utils/index.js";

export class FundsTransferMethodManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async deactivate(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawFundsTransferMethod>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/funds-transfer-methods/${id}/deactivate`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async create(
    payload: FundsTransferMethodPayload
  ): Promise<PrimeTrustResponse<RawFundsTransferMethod>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: PrimeTrustDataType.fundsTransferMethods,
        },
      },
      method: "post",
      url: "/funds-transfer-methods",
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawFundsTransferMethod>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/funds-transfer-methods/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawFundsTransferMethod>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/funds-transfer-methods",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
