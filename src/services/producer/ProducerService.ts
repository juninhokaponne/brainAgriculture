import { ProducerRepository } from "../../repositories/producer/ProducerRepository";
import { Producer } from "../../entities/producer/Producer";

import { CropRepository } from "../../repositories/crop/CropRepository";
import { Crop } from "../../entities/crop/Crop";

export class ProducerService {
  private repository: ProducerRepository;
  private cropRepository: CropRepository;

  constructor(repository: ProducerRepository, cropRepository: CropRepository) {
    this.repository = repository;
    this.cropRepository = cropRepository;
  }

  async createProducer(producer: Producer) {
    if (!producer.isValidCpfOrCnpj(producer.cpfOrCnpj)) {
      throw new Error("CPF or CNPJ invalid");
    }

    if (!producer.isValidArea()) {
      throw new Error(
        "The sum of the arable area and the vegetation area must be less than or equal to the total area"
      );
    }

    const createdProducer = await this.repository.create(producer);

    if (producer.crops && producer.crops.length > 0) {
      for (const cropData of producer.crops) {
        const crop = Crop.create(cropData.name, createdProducer.id);
        await this.cropRepository.create(crop);
      }
    }

    return createdProducer;
  }

  async getAllProducers() {
    return await this.repository.getAll();
  }

  async updateProducer(id: string, producer: Producer) {
    if (!id) {
      throw new Error("Id not provided");
    }

    const currentProducer = await this.repository.getById(id);

    if (!currentProducer) {
      throw new Error("Farmer not found or does not exist");
    }

    return await this.repository.update(id, producer);
  }

  async getProducerById(id: string) {
    if (!id) {
      throw new Error("Id not provided");
    }

    const producer = await this.repository.getById(id);

    if (!producer) {
      throw new Error("Farmer not found or does not exist");
    }

    return producer;
  }

  async deleteProducer(id: string) {
    if (!id) {
      throw new Error("Id not provided");
    }

    const producer = await this.repository.getById(id);

    if (!producer) {
      throw new Error("Farmer not found or does not exist");
    }

    return await this.repository.delete(id);
  }
}
