import type { PrimeTrustAPIClient } from "../client.js";
import type { RawWireInitiator } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class WireInitiatorManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawWireInitiator>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/wire-initiators/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawWireInitiator>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/wire-initiators",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
