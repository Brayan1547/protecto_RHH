function getUsers(req, res)  { 
    res.json({
        msg: 'listar todos los usuarios '
    });
};

module.exports = {
    getUsers
};
