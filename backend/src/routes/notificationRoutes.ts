import { Router } from 'express';
import { GenericRepository } from '../repositories/GenericRepository';
import { Notification } from '../entities/Notification';
import { authenticate } from '../middleware/auth';

const router = Router();
const repo = new GenericRepository(Notification);

router.get('/', authenticate, async (req, res) => {
  const notifications = await repo.findAllBy({ recipient: (req as any).user.id } as any);
  res.json(notifications);
});

export default router;
