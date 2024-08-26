import { Request, Response } from "express";
import { CropService } from "../../services/crop/CropService";
import { Crop } from "../../entities/crop/Crop";

export class CropController {
  private service: CropService;

  constructor(service: CropService) {
    this.service = service;
  }

  async create(req: Request, res: Response) {
    try {
      const cropData = req.body;
      const crop = new Crop(
        cropData.id,
        cropData.name,
        cropData.farmerId,
        cropData.plantedArea
      );

      const createdCrop = await this.service.createCrop(crop);
      res.status(201).json(createdCrop);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const crops = await this.service.getAllCrops();
      res.status(200).json(crops);
    } catch (error: any) {
      res.status(500).json({ error: "Error retrieving crops" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const crop = await this.service.getCropById(req.params.id);
      res.status(200).json(crop);
    } catch (error: any) {
      res.status(404).json({ error: "Crop not found" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const cropData = req.body;
      const id = req.params.id;
      const { name } = cropData;

      const updatedCrop = await this.service.updateCrop(id, name);
      res.status(200).json(updatedCrop);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await this.service.deleteCrop(req.params.id);
      res.status(204).send();
    } catch (error: any) {
      res.status(404).json({ error: "Crop not found" });
    }
  }

  async associate(req: Request, res: Response) {
    try {
      const { name, farmerId } = req.body;
      if (!name || !farmerId) {
        return res
          .status(400)
          .json({ error: "Name and farmerId are required" });
      }
      const newCrop = await this.service.associateCropWithFarmer(
        name,
        farmerId
      );
      res.status(201).json(newCrop);
    } catch (error) {
      console.error("Error associating crop with farmer:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
