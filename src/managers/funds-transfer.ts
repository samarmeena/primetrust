import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class FundsTransferManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.fundsTransfers>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/funds-transfers/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.fundsTransfers>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.fundsTransfers>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/funds-transfers",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.fundsTransfers>(
      resp
    );

    return response;
  }
}
