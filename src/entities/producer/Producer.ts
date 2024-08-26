import { Crop } from "../crop/Crop";

export class Producer {
  constructor(
    public cpfOrCnpj: string,
    public producerName: string,
    public farmName: string,
    public city: string,
    public state: string,
    public totalArea: number,
    public arableArea: number,
    public vegetationArea: number,
    public crops: Crop[] = []
  ) {}

  isValidCpfOrCnpj(cpfOrCnpj: string): boolean {
    cpfOrCnpj = cpfOrCnpj.replace(/[^\d]+/g, "");

    if (cpfOrCnpj.length === 11 || cpfOrCnpj.length === 14) {
      return true;
    }

    if (
      cpfOrCnpj === "00000000000" ||
      cpfOrCnpj === "11111111111" ||
      cpfOrCnpj === "22222222222" ||
      cpfOrCnpj === "33333333333" ||
      cpfOrCnpj === "44444444444" ||
      cpfOrCnpj === "55555555555" ||
      cpfOrCnpj === "66666666666" ||
      cpfOrCnpj === "77777777777" ||
      cpfOrCnpj === "88888888888" ||
      cpfOrCnpj === "99999999999"
    ) {
      return false;
    }

    return false;
  }

  isValidArea(): boolean {
    return this.arableArea + this.vegetationArea <= this.totalArea;
  }
}
