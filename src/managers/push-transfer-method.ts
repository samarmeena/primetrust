import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class PushTransferMethodManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.pushTransferMethods> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/push-transfer-methods/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.pushTransferMethods>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.pushTransferMethods>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/push-transfer-methods",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.pushTransferMethods>(resp);

    return response;
  }
}
