import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.post('/create-users', UserController.create);

routes.get('/', (req, res) => {
    return res.json();
});

export default routes;