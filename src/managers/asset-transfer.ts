import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustError, PrimeTrustResponse } from "../utils/index.js";

export class AssetTransferManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async cancel(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.assetTransfers>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/asset-transfers/${id}/cancel`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.assetTransfers>(
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
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.assetTransfers> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/asset-transfers/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.assetTransfers>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.assetTransfers>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/asset-transfers",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.assetTransfers>(
      resp
    );

    return response;
  }

  async sandboxClear(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.assetTransfers>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/asset-transfers/${id}/sandbox/clear`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.assetTransfers>(
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
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.assetTransfers>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/asset-transfers/${id}/sandbox/settle`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.assetTransfers>(
      resp
    );

    if (!response.one) {
      throw new PrimeTrustError("Failed to retrieve the resource");
    }

    return response.one;
  }
}
