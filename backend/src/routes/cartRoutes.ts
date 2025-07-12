import { Router } from 'express';
import { GenericRepository } from '../repositories/GenericRepository';
import { Cart } from '../entities/Cart';
import { authenticate } from '../middleware/auth';

const router = Router();
const repo = new GenericRepository(Cart);

router.post('/', authenticate, async (req, res) => {
  const { client } = req.body;
  const existing = await repo.findBy({ client, status: 'active' } as any);
  if (existing) {
    const updated = await repo.update((existing as any).id, req.body);
    return res.json(updated);
  }
  const cart = await repo.create(req.body);
  res.json(cart);
});

router.get('/', authenticate, async (_req, res) => {
  const carts = await repo.findAll();
  res.json(carts);
});

export default router;
