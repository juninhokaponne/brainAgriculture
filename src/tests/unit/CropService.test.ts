import { CropService } from "../../services/crop/CropService";
import { CropRepository } from "../../repositories/crop/CropRepository";
import { Crop } from "../../entities/crop/Crop";

const mockCropRepository = () => {
  return {
    create: jest.fn(),
    getAll: jest.fn(),
    getById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };
};

describe("CropService", () => {
  let service: CropService;
  let cropRepo: ReturnType<typeof mockCropRepository>;

  beforeEach(() => {
    cropRepo = mockCropRepository();
    service = new CropService(cropRepo as any);
  });

  describe("createCrop", () => {
    it("should create a crop successfully", async () => {
      const cropData = new Crop("some-id", "Cana de açucar", "farmer-id", 100);
      cropRepo.create = jest.fn().mockResolvedValue(cropData);

      await expect(service.createCrop(cropData)).resolves.toEqual(cropData);
      expect(cropRepo.create).toHaveBeenCalledWith(cropData);
    });
  });

  describe("getAllCrops", () => {
    it("should return all crops", async () => {
      const crops = [
        new Crop("1", "Cana de açucar", "farmer-id", 100),
        new Crop("2", "Milho", "farmer-id", 50),
      ];
      cropRepo.getAll = jest.fn().mockResolvedValue(crops);

      await expect(service.getAllCrops()).resolves.toEqual(crops);
    });
  });

  describe("getCropById", () => {
    it("should throw an error if ID is not provided", async () => {
      await expect(service.getCropById("")).rejects.toThrow("Id not provided");
    });

    it("should throw an error if crop does not exist", async () => {
      cropRepo.getById = jest.fn().mockResolvedValue(null);

      await expect(service.getCropById("some-id")).rejects.toThrow(
        "Crop not found"
      );
    });

    it("should return a crop by ID", async () => {
      const crop = new Crop("some-id", "Cana de açucar", "farmer-id", 100);
      cropRepo.getById = jest.fn().mockResolvedValue(crop);

      await expect(service.getCropById("some-id")).resolves.toEqual(crop);
    });
  });

  describe("deleteCrop", () => {
    it("should throw an error if ID is not provided", async () => {
      await expect(service.deleteCrop("")).rejects.toThrow("Id not provided");
    });

    it("should throw an error if crop does not exist", async () => {
      cropRepo.getById = jest.fn().mockResolvedValue(null);

      await expect(service.deleteCrop("some-id")).rejects.toThrow(
        "Crop not found"
      );
    });

    it("should delete a crop successfully", async () => {
      cropRepo.getById = jest.fn().mockResolvedValue({ id: "some-id" });
      cropRepo.delete = jest.fn().mockResolvedValue({ id: "some-id" });

      await expect(service.deleteCrop("some-id")).resolves.toEqual({
        id: "some-id",
      });
    });
  });
});
