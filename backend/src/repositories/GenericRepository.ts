import { Repository, DeepPartial, getRepository } from 'typeorm';

export class GenericRepository<T> {
  private repo: Repository<T>;

  constructor(entity: new () => T) {
    this.repo = getRepository(entity);
  }

  async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  async findById(id: string): Promise<T | undefined> {
    return this.repo.findOne(id);
  }

  async findAll(): Promise<T[]> {
    return this.repo.find();
  }

  async update(id: string, data: DeepPartial<T>): Promise<T | undefined> {
    await this.repo.update(id, data);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }

  async findBy(criteria: Partial<T>): Promise<T | undefined> {
    return this.repo.findOne({ where: criteria });
  }

  async findAllBy(criteria: Partial<T>): Promise<T[]> {
    return this.repo.find({ where: criteria });
  }
}
