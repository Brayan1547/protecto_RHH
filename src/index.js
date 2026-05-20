const exprees = require( 'express');

const app = exprees();

app.listen(300, ()=>{
    console.log(`server running on http://localhost:3000`)
});