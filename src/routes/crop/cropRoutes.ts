import { Router } from "express";
import { CropController } from "../../controllers/crop/CropController";
import { CropService } from "../../services/crop/CropService";
import { CropRepository } from "../../repositories/crop/CropRepository";

const router = Router();
const repository = new CropRepository();
const service = new CropService(repository);
const controller = new CropController(service);

router.post("/crops", (req, res) => controller.create(req, res));
router.post("/crops/associate", (req, res) => controller.associate(req, res));
router.get("/crops", (req, res) => controller.getAll(req, res));
router.get("/crops/:id", (req, res) => controller.getById(req, res));
router.put("/crops/:id", (req, res) => controller.update(req, res));
router.delete("/crops/:id", (req, res) => controller.delete(req, res));

export default router;
