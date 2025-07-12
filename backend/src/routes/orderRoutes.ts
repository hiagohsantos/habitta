import { Router } from 'express';
import { GenericRepository } from '../repositories/GenericRepository';
import { Order } from '../entities/Order';
import { authenticate } from '../middleware/auth';

const router = Router();
const repo = new GenericRepository(Order);

router.post('/', authenticate, async (req, res) => {
  const order = await repo.create(req.body);
  res.json(order);
});

export default router;
