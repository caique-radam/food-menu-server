import express from 'express';
import { CustomerController } from '../controllers/CustomerController';
import { adminOnly, auth } from '../middleware/auth';

const customerController = new CustomerController();
const CustomerRouter = express.Router();

CustomerRouter
  .get('/', auth, adminOnly, customerController.getAll)
  //.get('/:id', auth, adminOnly, customerController.getById);
  .post('/', auth, adminOnly, customerController.create)
  .post('/', auth, adminOnly, customerController.update)
  .post('/', auth, adminOnly, customerController.delete);

export default CustomerRouter;