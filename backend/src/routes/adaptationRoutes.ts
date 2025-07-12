import { Router } from 'express';
import { GenericRepository } from '../repositories/GenericRepository';
import { AdaptationRequest } from '../entities/AdaptationRequest';
import { authenticate } from '../middleware/auth';

const router = Router();
const repo = new GenericRepository(AdaptationRequest);

router.post('/', authenticate, async (req, res) => {
  const request = await repo.create(req.body);
  res.json(request);
});

router.put('/:id', authenticate, async (req, res) => {
  const updated = await repo.update(req.params.id, req.body);
  res.json(updated);
});

export default router;
