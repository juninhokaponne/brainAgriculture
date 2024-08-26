import { CropRepository } from "../../repositories/crop/CropRepository";
import { Crop } from "../../entities/crop/Crop";

export class CropService {
  private repository: CropRepository;

  constructor(repository: CropRepository) {
    this.repository = repository;
  }

  async createCrop(crop: Crop) {
    return await this.repository.create(crop);
  }

  async getAllCrops() {
    return await this.repository.getAll();
  }

  async getCropById(id: string) {
    if (!id) {
      throw new Error("Id not provided");
    }
    const crop = await this.repository.getById(id);
    if (!crop) {
      throw new Error("Crop not found");
    }

    return crop;
  }

  async updateCrop(id: string, name: string) {
    if (!id) {
      throw new Error("Id not provided");
    }
    const existingCrop = await this.getCropById(id);
    if (!existingCrop) {
      throw new Error("Crop not found");
    }
    return await this.repository.update(id, name);
  }

  async deleteCrop(id: string) {
    if (!id) {
      throw new Error("Id not provided");
    }
    const crop = await this.getCropById(id);
    if (!crop) {
      throw new Error("Crop not found");
    }
    return await this.repository.delete(id);
  }

  async associateCropWithFarmer(name: string, farmerId: string) {
    return await this.repository.createCropWithFarmer(name, farmerId);
  }
}
