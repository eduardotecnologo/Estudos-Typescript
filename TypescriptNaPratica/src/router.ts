import { Router } from 'express';
import UserController from './controllers/UserController';

const router = Router();

router.get('/users', UserController.index);
router.post('/users/create', UserController.create);

// router.get('/', (req, res) => {
//   return res.send('Koééé manolo');
// });

export default router;
