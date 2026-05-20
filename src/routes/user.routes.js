const {Router} = require( 'express' );
const router = Router();

const { getUsers, updateUser, updateUsers, deleteusers, createUser } = require('./controllers/user.controllers.js');

router.get('/', getUsers );
router.patch('/', updateUsers );
router.delete('/', deleteusers  );
router.post('/', createUser  );




module.exports = router;