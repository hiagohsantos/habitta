import { Router } from 'express';
import { GenericRepository } from '../repositories/GenericRepository';
import { ArchitecturalPlan } from '../entities/ArchitecturalPlan';
import { authenticate } from '../middleware/auth';

const router = Router();
const repo = new GenericRepository(ArchitecturalPlan);

router.post('/', authenticate, async (req, res) => {
  const plan = await repo.create(req.body);
  res.json(plan);
});

router.get('/', authenticate, async (_req, res) => {
  const plans = await repo.findAll();
  res.json(plans);
});

export default router;
