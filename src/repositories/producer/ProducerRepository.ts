import { PrismaClient } from "@prisma/client";
import { Producer } from "../../entities/producer/Producer";

const prisma = new PrismaClient();

export class ProducerRepository {
  async create(producer: Producer) {
    return await prisma.farmer.create({
      data: {
        cpfOrCnpj: producer.cpfOrCnpj,
        name: producer.producerName,
        farmName: producer.farmName,
        city: producer.city,
        state: producer.state,
        totalArea: producer.totalArea,
        arableArea: producer.arableArea,
        vegetationArea: producer.vegetationArea,
      },
    });
  }

  async getAll() {
    return await prisma.farmer.findMany({
      include: {
        crops: true,
      },
    });
  }

  async getById(id: string) {
    return await prisma.farmer.findUnique({
      where: {
        cpfOrCnpj: id,
      },
    });
  }

  async update(id: string, producer: Producer) {
    return await prisma.farmer.update({
      where: {
        cpfOrCnpj: id,
      },
      data: {
        cpfOrCnpj: producer.cpfOrCnpj,
        name: producer.producerName,
        farmName: producer.farmName,
        city: producer.city,
        state: producer.state,
        totalArea: producer.totalArea,
        arableArea: producer.arableArea,
        vegetationArea: producer.vegetationArea,
      },
    });
  }

  async delete(id: string) {
    return await prisma.farmer.delete({
      where: {
        cpfOrCnpj: id,
      },
    });
  }
}
