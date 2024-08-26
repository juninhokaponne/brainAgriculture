import { Request, Response } from "express";
import { ProducerService } from "../../services/producer/ProducerService";
import { Producer } from "../../entities/producer/Producer";

export class ProducerController {
  private service: ProducerService;

  constructor(service: ProducerService) {
    this.service = service;
  }

  async create(req: Request, res: Response) {
    try {
      const producerData = req.body;
      const producer = new Producer(
        producerData.cpfOrCnpj,
        producerData.name,
        producerData.farmName,
        producerData.city,
        producerData.state,
        producerData.totalArea,
        producerData.arableArea,
        producerData.vegetationArea,
        producerData.crops
      );

      await this.service.createProducer(producer);
      res.status(201).json("user created successfully");
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async width(req: Request, res: Response) {
    try {
      const producers = await this.service.getAllProducers();
      res.status(200).json(producers);
    } catch (error: any) {
      res.status(500).json({ error: "Error to get the farmers" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const producer = await this.service.getProducerById(req.params.id);
      res.status(200).json(producer);
    } catch (error: any) {
      res.status(404).json({ error: "Farmer not found or does not exist" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const producerData = req.body;
      const producer = new Producer(
        producerData.cpfOrCnpj,
        producerData.name,
        producerData.farmName,
        producerData.city,
        producerData.state,
        producerData.totalArea,
        producerData.arableArea,
        producerData.vegetationArea
      );

      const updatedProducer = await this.service.updateProducer(
        req.params.id,
        producer
      );
      res.status(200).json(updatedProducer);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await this.service.deleteProducer(req.params.id);
      res.status(204).send();
    } catch (error: any) {
      res.status(404).json({ error: "Farmer not found or does not exist" });
    }
  }
}
