import { Customer } from "@prisma/client";
import { BaseService, IBaseService } from "../bases/BaseService";
import { CustomerModel } from "../models/CustomerModel";

interface ICustomerService extends IBaseService<Customer> {}

export class CustomerService extends BaseService<Customer> implements ICustomerService {
  constructor() {
    super(new CustomerModel());
  }
}