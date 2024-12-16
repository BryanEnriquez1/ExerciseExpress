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
app.get('/buscausu/:id',(req,res)=>{
    let id = req.params.id;
    let usuario = lista.find(item => item.id === id);
    res.json(usuario);
});
app.get('/Alexander',(req,res)=>{
    res.send('Hola me llamo Alexander Enriquez, tengo 22 años, me gusta progrmar, entrenar MMA y tambien tocar la guitarra');
});
app.get('/suma',(req,res)=>{
    let n1 = 2;
    let n2 = 4;
    res.send(''+(n1+n2));
});
app.get('/sumacli/:n1',(req,res)=>{
    let a = parseInt(req.params.n1);
    let b = 5;
    let sum = a+b;
    res.send(''+sum);
});
app.listen(3000,()=>{
    console.log('Framework ejecutandose con éxito');
});