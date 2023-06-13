import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class WireInitiatorManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.wireInitiators>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/wire-initiators/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.wireInitiators>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.wireInitiators>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/wire-initiators",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.wireInitiators>(
      resp
    );

    return response;
  }
}
