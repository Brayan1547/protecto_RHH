
import express from 'express'
import userRoutes from './routes/user.routes.js'
import dbconection from './config/mongo.confi.js';

const app = express();

//conexion ala base de datos 
dbconection();

//Endoint
app.get('/health', (req, res ) => {
    res.json({
        msg:'sitio funcionado '
    });
});

//Endoints agrupados por entidad
app.use('/users', userRoutes );

//lanzo el servidor web
app.listen(3000, ()=>{
    console.log(`server running on http://localhost:3000`)
});