const express = require('express');
const app = express();
app.use(express.json());
//lista json
var lista = [{
    id:'1',
    nombre:'Alexander'
},{
    id:'2',
    nombre:'Bryan'
}];
//ayuda a usar el framework express: app como web service tipo get
app.get('/nombre',(req,res)=>{
    res.json(lista);
});
app.listen(3000,()=>{
    console.log('Framework ejecutandose con éxito');
});