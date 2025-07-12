import { Router } from 'express';
import { GenericRepository } from '../repositories/GenericRepository';
import { User } from '../entities/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { authenticate } from '../middleware/auth';

const router = Router();
const repo = new GenericRepository(User);

router.post('/register', async (req, res) => {
  const { email, password, role, name, creaCau } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await repo.create({ email, password: hashed, role, name, creaCau });
  res.json(user);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await repo.findBy({ email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, (user as any).password);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: (user as any).id, role: (user as any).role }, process.env.JWT_SECRET || 'secret');
  res.json({ token });
});

router.get('/me', authenticate, async (req, res) => {
  const user = await repo.findById((req as any).user.id);
  res.json(user);
});

export default router;
