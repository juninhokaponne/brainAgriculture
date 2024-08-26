import { ProducerService } from "../../services/producer/ProducerService";
import { ProducerRepository } from "../../repositories/producer/ProducerRepository";
import { CropRepository } from "../../repositories/crop/CropRepository";
import { Producer } from "../../entities/producer/Producer";
import { Crop } from "../../entities/crop/Crop";

const mockProducerRepository = () => {
  return {
    create: jest.fn(),
    getAll: jest.fn(),
    getById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };
};

const mockCropRepository = () => {
  return {
    create: jest.fn(),
  };
};

describe("ProducerService", () => {
  let service: ProducerService;
  let producerRepo: ReturnType<typeof mockProducerRepository>;
  let cropRepo: ReturnType<typeof mockCropRepository>;

  beforeEach(() => {
    producerRepo = mockProducerRepository();
    cropRepo = mockCropRepository();
    service = new ProducerService(producerRepo as any, cropRepo as any);
  });

  describe("createProducer", () => {
    it("should throw an error if CPF/CNPJ is invalid", async () => {
      const producer = new Producer(
        "invalid",
        "Gilson Oliveira",
        "Colheita Feliz",
        "Porto Alegre",
        "RS",
        100,
        50,
        50
      );

      producer.isValidCpfOrCnpj = jest.fn().mockReturnValue(false);

      await expect(service.createProducer(producer)).rejects.toThrow(
        "CPF or CNPJ invalid"
      );
    });

    it("should throw an error if area is invalid", async () => {
      const producer = new Producer(
        "12345678900",
        "Gilson Oliveira",
        "Colheita Feliz",
        "Porto Alegre",
        "RS",
        100,
        60,
        50
      );

      producer.isValidArea = jest.fn().mockReturnValue(false);

      await expect(service.createProducer(producer)).rejects.toThrow(
        "The sum of the arable area and the vegetation area must be less than or equal to the total area"
      );
    });

    it("should create a producer and associated crops successfully", async () => {
      const producer = new Producer(
        "12345678900",
        "Gilson Oliveira",
        "Colheita Feliz",
        "Porto Alegre",
        "RS",
        100,
        50,
        50,
        [
          {
            name: "Milho",
            id: "",
            farmerId: "",
            plantedArea: null,
          },
        ]
      );

      const createdProducer = { id: "some-id", ...producer };
      producerRepo.create = jest.fn().mockResolvedValue(createdProducer);
      cropRepo.create = jest
        .fn()
        .mockResolvedValue({ name: "Milho", farmerId: createdProducer.id });

      await expect(service.createProducer(producer)).resolves.toEqual(
        createdProducer
      );
      expect(cropRepo.create).toHaveBeenCalledWith(
        new Crop("Milho", createdProducer.id)
      );
    });
  });

  describe("getAllProducers", () => {
    it("should return all producers", async () => {
      const producers = [
        { id: "1", name: "Producer 1" },
        { id: "2", name: "Producer 2" },
      ];
      producerRepo.getAll = jest.fn().mockResolvedValue(producers);

      await expect(service.getAllProducers()).resolves.toEqual(producers);
    });
  });

  describe("updateProducer", () => {
    it("should throw an error if ID is not provided", async () => {
      const producer = new Producer(
        "12345678900",
        "Gilson Oliveira",
        "Colheita Feliz",
        "Porto Alegre",
        "RS",
        100,
        50,
        50
      );
      await expect(service.updateProducer("", producer)).rejects.toThrow(
        "Id not provided"
      );
    });

    it("should throw an error if producer does not exist", async () => {
      const producer = new Producer(
        "12345678900",
        "Gilson Oliveira",
        "Colheita Feliz",
        "Porto Alegre",
        "RS",
        100,
        50,
        50
      );
      producerRepo.getById = jest.fn().mockResolvedValue(null);

      await expect(service.updateProducer("some-id", producer)).rejects.toThrow(
        "Farmer not found or does not exist"
      );
    });
  });

  describe("getProducerById", () => {
    it("should throw an error if ID is not provided", async () => {
      await expect(service.getProducerById("")).rejects.toThrow(
        "Id not provided"
      );
    });

    it("should throw an error if producer does not exist", async () => {
      producerRepo.getById = jest.fn().mockResolvedValue(null);

      await expect(service.getProducerById("some-id")).rejects.toThrow(
        "Farmer not found or does not exist"
      );
    });

    it("should return a producer by ID", async () => {
      const producer = { id: "some-id", name: "Producer Name" };
      producerRepo.getById = jest.fn().mockResolvedValue(producer);

      await expect(service.getProducerById("some-id")).resolves.toEqual(
        producer
      );
    });
  });

  describe("deleteProducer", () => {
    it("should throw an error if ID is not provided", async () => {
      await expect(service.deleteProducer("")).rejects.toThrow(
        "Id not provided"
      );
    });

    it("should throw an error if producer does not exist", async () => {
      producerRepo.getById = jest.fn().mockResolvedValue(null);

      await expect(service.deleteProducer("some-id")).rejects.toThrow(
        "Farmer not found or does not exist"
      );
    });

    it("should delete a producer successfully", async () => {
      producerRepo.getById = jest.fn().mockResolvedValue({ id: "some-id" });
      producerRepo.delete = jest.fn().mockResolvedValue({ id: "some-id" });

      await expect(service.deleteProducer("some-id")).resolves.toEqual({
        id: "some-id",
      });
    });
  });
});
