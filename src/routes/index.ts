import { Router } from "express";
import producerRoutes from "../routes/producer/producerRoutes";
import cropRoutes from "../routes/crop/cropRoutes";

const router = Router();

router.use(producerRoutes);
router.use(cropRoutes);

export default router;
