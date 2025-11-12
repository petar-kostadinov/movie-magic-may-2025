import { Router } from 'express';

import homecontroller from './controllers/homeController.js';
import moviecontroller from './controllers/movieController.js';
import castController from './controllers/castController.js';
import userController from './controllers/userController.js';

const routes = Router();

routes.use(homecontroller);
routes.use('/movies', moviecontroller);
routes.use('/casts', castController);
routes.use('/users', userController);
routes.use('*url', (req, res) => {
    res.render('404');
});

export default routes;