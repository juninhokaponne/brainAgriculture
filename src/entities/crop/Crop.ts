export class Crop {
  id: string;
  name: string;
  farmerId: string;
  plantedArea: number | null = null;

  constructor(
    name: string,
    farmerId: string,
    id?: string,
    plantedArea?: number
  ) {
    this.id = id ?? "";
    this.name = name;
    this.farmerId = farmerId;
    if (plantedArea !== undefined) {
      this.plantedArea = plantedArea;
    }
  }

  static create(name: string, farmerId: string): Crop {
    return new Crop(name, farmerId);
  }
}
