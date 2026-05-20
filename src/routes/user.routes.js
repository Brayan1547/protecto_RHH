const {Router} = require( 'express' );
const router = Router();

const { getUsers } = require('./controllers/user.controllers.js');

router.get('/', getUsers );

module.exports = router;