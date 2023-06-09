import type { PrimeTrustAPIClient } from "../client.js";
import type { RawElectronicSignature } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class ElectronicSignatureManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawElectronicSignature>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/electronic-signatures/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawElectronicSignature>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/electronic-signatures",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
