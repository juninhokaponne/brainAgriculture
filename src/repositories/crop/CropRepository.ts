import { PrismaClient } from "@prisma/client";
import { Crop } from "../../entities/crop/Crop";

const prisma = new PrismaClient();

export class CropRepository {
  async create(crop: Crop) {
    console.log("crop -> ", crop);
    if (!crop.name || !crop.farmerId) {
      throw new Error("Name or farmerId is missing");
    }

    return await prisma.crop.create({
      data: {
        name: crop.name,
        farmerId: crop.farmerId,
      },
    });
  }

  async createCropWithFarmer(name: string, farmerId: string) {
    console.log("Associating crop with farmer");
    return await prisma.crop.create({
      data: {
        name,
        farmerId,
      },
    });
  }

  async getAll() {
    return await prisma.crop.findMany();
  }

  async getById(id: string) {
    return await prisma.crop.findUnique({
      where: { id },
    });
  }

  async update(id: string, name: string) {
    return await prisma.crop.update({
      where: { id: id },
      data: {
        name: name,
      },
    });
  }

  async delete(id: string) {
    return await prisma.crop.delete({
      where: { id },
    });
  }
}
