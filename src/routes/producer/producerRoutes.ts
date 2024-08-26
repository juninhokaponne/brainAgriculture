import { Router } from "express";
import { ProducerController } from "../../controllers/producer/ProducerController";
import { ProducerService } from "../../services/producer/ProducerService";
import { ProducerRepository } from "../../repositories/producer/ProducerRepository";
import { CropRepository } from "../../repositories/crop/CropRepository";

const router = Router();
const repository = new ProducerRepository();
const cropRepository = new CropRepository();
const service = new ProducerService(repository, cropRepository);
const controller = new ProducerController(service);

router.post("/producers", (req, res) => controller.create(req, res));
router.get("/producers", (req, res) => controller.width(req, res));
router.get("/producers/:id", (req, res) => controller.getById(req, res));
router.put("/producers/:id", (req, res) => controller.update(req, res));
router.delete("/producers/:id", (req, res) => controller.delete(req, res));

export default router;
