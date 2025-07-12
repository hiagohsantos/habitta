import { Router } from 'express';
import { GenericRepository } from '../repositories/GenericRepository';
import { Lead } from '../entities/Lead';
import { authenticate } from '../middleware/auth';

const router = Router();
const repo = new GenericRepository(Lead);

router.post('/', authenticate, async (req, res) => {
  const lead = await repo.create(req.body);
  res.json(lead);
});

router.get('/', authenticate, async (_req, res) => {
  const leads = await repo.findAll();
  res.json(leads);
});

router.put('/:id', authenticate, async (req, res) => {
  const updated = await repo.update(req.params.id, req.body);
  res.json(updated);
});

export default router;
