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
//figuras geometricas
app.get('/trianguloRectangulo/:base/:altura',(req,res)=>{
    
    let b = parseFloat(req.params.base);
    let h = parseFloat(req.params.altura);
    
    let area = (b * h) / 2;
    let hipotenusa = Math.sqrt((b ** 2) + (h ** 2)); //Teorema de pitagoras
    let perimetro = b + h + hipotenusa;

    res.json({
        base: b,
        altura: h,
        area: area.toFixed(2),
        perimetro: perimetro.toFixed(2)
    });
});
app.get('/rombo/:dMayor/:dMenor/:lado',(req,res)=>{

    let D = parseFloat(req.params.dMayor);
    let d = parseFloat(req.params.dMenor);
    let L = parseFloat(req.params.lado);

    let area = (D * d) / 2;
    let perimetro = 4 * L;

    res.json({
        diagonalMayor: D,
        diagonalMenor: d,
        lado: L,
        area: area.toFixed(2),
        perimetro: perimetro.toFixed(2)
    });
});
app.get('/paralelogramo/:base/:altura/:lado',(req,res)=>{

    let base = parseFloat(req.params.base);
    let altura = parseFloat(req.params.altura);
    let lado = parseFloat(req.params.lado);

    let area = base * altura;
    let perimetro = 2 * (base + lado);

    res.json({
        base: base,
        altura: altura,
        lado: lado,
        area: area.toFixed(2),
        perimetro: perimetro.toFixed(2)
    });
});

app.listen(3000,()=>{
    console.log('Framework ejecutandose con éxito');
});