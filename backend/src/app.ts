import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';
import ormconfig from './config/ormconfig';
import userRoutes from './routes/userRoutes';
import leadRoutes from './routes/leadRoutes';
import planRoutes from './routes/planRoutes';
import cartRoutes from './routes/cartRoutes';
import orderRoutes from './routes/orderRoutes';
import adaptationRoutes from './routes/adaptationRoutes';
import notificationRoutes from './routes/notificationRoutes';
import walletRoutes from './routes/walletRoutes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/plans', planRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/adaptations', adaptationRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/wallets', walletRoutes);

createConnection(ormconfig).then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
});

export default app;
