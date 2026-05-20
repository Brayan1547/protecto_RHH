const exprees = require( 'express');

const app = exprees();

app.get('/health', (req, res ) => {
    res.json({
        msg:'sitio funcionado '
    });
});

app.listen(3000, ()=>{
    console.log(`server running on http://localhost:3000`)
});