function getUsers(req, res)  { 
    res.json({
        msg: 'listar todos los usuarios '
    });
};

function updateUsers(req, res ) {
    res.json({
        msg: 'usuario actualizado'
    });
};

function deleteusers(req, res){
    res.json({
        msg:'elieminar usuario'
    });
};

function createUser(req, res){
    res.json({
        msg:'crea un usuario'
    });
};

module.exports = {
    getUsers , updateUsers, deleteusers, createUser
};
