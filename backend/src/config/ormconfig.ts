import { ConnectionOptions } from 'typeorm';
import { User } from '../entities/User';
import { Lead } from '../entities/Lead';
import { ArchitecturalPlan } from '../entities/ArchitecturalPlan';
import { Cart } from '../entities/Cart';
import { CartItem } from '../entities/CartItem';
import { Order } from '../entities/Order';
import { AdaptationRequest } from '../entities/AdaptationRequest';
import { Notification } from '../entities/Notification';
import { Wallet } from '../entities/Wallet';

const config: ConnectionOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: true,
  logging: false,
  entities: [User, Lead, ArchitecturalPlan, Cart, CartItem, Order, AdaptationRequest, Notification, Wallet],
};

export default config;
