import { Router } from 'express';
import { GenericRepository } from '../repositories/GenericRepository';
import { Wallet } from '../entities/Wallet';
import { authenticate } from '../middleware/auth';

const router = Router();
const repo = new GenericRepository(Wallet);

router.get('/', authenticate, async (req, res) => {
  const wallet = await repo.findBy({ architect: (req as any).user.id } as any);
  res.json(wallet);
});

export default router;
