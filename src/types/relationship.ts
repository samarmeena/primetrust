export interface RelationDataData {
  id: string;
  type: string;
}

export interface RelationDataLink {
  related: string;
}

export interface RelationshipData {
  data?: RelationDataData | RelationDataData[];
  links?: RelationDataLink;
}

export class Relationship {
  constructor(public raw: RelationshipData) {
    //
  }

  static create(data: RelationshipData): Relationship {
    return new Relationship(data);
  }

  static getId(data: RelationshipData): string {
    const id = new Relationship(data).get()?.id;
    if (!id) {
      throw Error(`Unable to fetch id in data: ${JSON.stringify(data)}`);
    }

    return id;
  }

  get(): RelationDataData | undefined {
    if (!this.raw.data) {
      return undefined;
    }

    if (Array.isArray(this.raw.data)) {
      return this.raw.data[0];
    }

    return this.raw.data;
  }

  getAll(): RelationDataData[] {
    if (!this.raw.data) {
      return [];
    }

    if (Array.isArray(this.raw.data)) {
      return this.raw.data;
    }

    return [this.raw.data];
  }

  link(): string | undefined {
    return this.raw.links?.related;
  }
}
