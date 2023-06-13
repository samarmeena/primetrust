import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustError, PrimeTrustResponse } from "../utils/index.js";

export class FundsTransferManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async cancel(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.fundsTransfers>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/funds-transfers/${id}/cancel`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.fundsTransfers>(
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
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.fundsTransfers> | undefined> {
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

  async toggleManualHold(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.fundsTransfers>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/funds-transfers/${id}/toggle-manual-hold`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.fundsTransfers>(
      resp
    );

    if (!response.one) {
      throw new PrimeTrustError("Failed to retrieve the resource");
    }

    return response.one;
  }

  async sandboxClear(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.fundsTransfers>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/funds-transfers/${id}/sandbox/clear`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.fundsTransfers>(
      resp
    );

    if (!response.one) {
      throw new PrimeTrustError("Failed to retrieve the resource");
    }

    return response.one;
  }

  async sandboxSettle(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.fundsTransfers>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/funds-transfers/${id}/sandbox/settle`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.fundsTransfers>(
      resp
    );

    if (!response.one) {
      throw new PrimeTrustError("Failed to retrieve the resource");
    }

    return response.one;
  }

  async sandboxReverse(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.fundsTransfers>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/funds-transfers/${id}/sandbox/reverse`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.fundsTransfers>(
      resp
    );

    if (!response.one) {
      throw new PrimeTrustError("Failed to retrieve the resource");
    }

    return response.one;
  }
}
