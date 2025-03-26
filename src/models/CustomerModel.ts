import { Customer, PrismaClient } from "@prisma/client";
import { BaseRepository, IBaseRepository } from "../bases/BaseRepository";

interface ICustomerRepository extends IBaseRepository<Customer> {}

const prisma = new PrismaClient();

export class CustomerModel extends BaseRepository<Customer> implements ICustomerRepository {
  constructor() {
    super(prisma, prisma.customer);
  }
}