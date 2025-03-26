import { Customer } from "@prisma/client";
import { BaseController, IBaseController } from "../bases/BaseController";
import { CustomerService } from "../services/CustomerService";

interface ICustomerController extends IBaseController {}

export class CustomerController extends BaseController<Customer> implements ICustomerController{
  constructor() {
    super(new CustomerService());
  }
}