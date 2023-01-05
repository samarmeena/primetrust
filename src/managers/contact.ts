import type { PrimeTrustAPIClient } from "../client.js";
import type { RawContact } from "../interfaces/index.js";
import { toCamelCase } from "../utils/index.js";

export class ContactManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(params?: Record<string, string>): Promise<RawContact[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/contacts",
    });

    const transform = (data: any) => ({
      ...toCamelCase(data.attributes),
      id: data.id,
    });

    return resp.data.map((d: any) => transform(d));
  }
}
