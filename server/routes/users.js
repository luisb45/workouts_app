import express from 'express';

import { signUp, getUsers } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/signUp', signUp);


export default router;
