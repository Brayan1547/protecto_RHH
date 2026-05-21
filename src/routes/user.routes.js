import { Router} from "express";

const router = Router();

import { getUsers, updateUsers, deleteusers, createUser } from './controllers/user.controllers.js';

router.get('/', getUsers );
router.patch('/', updateUsers );
router.delete('/', deleteusers  );
router.post('/', createUser  );

export default router;