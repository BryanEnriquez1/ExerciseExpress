const express = require('express');
const algebra = require('algebra.js');
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
app.get('/trinomioCuadradoPerfecto/:a/:b/:c', (req, res) => {

    /*let fg1 = `(a+b)^2`;
    let fg2 = `(a-b)^2`;
    
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    //(a+b)2
    let fb1 = `(${a} + ${b})^2`;
    //(a-b)2
    let fb2 = `(${a} - ${b})^2`; 
    //a2+2ab+b2
    let fb21 = `${a}^2 + 2(${a})(${b}) + ${b}^2`;
    //a2-2ab+b2
    let fb22 = `${a}^2 - 2(${a})(${b}) + ${b}^2`;

    let a2 = Math.pow(a, 2); // a^2
    let ab2 = 2 * (a * b);   // 2ab
    let b2 = Math.pow(b, 2); // b^2

    let fr1 = `${a2} + ${ab2} + ${b2}`;
    let fr2 = `${a2} - ${ab2} + ${b2}`;

    let r1 = a2 + ab2 + b2;
    let r2 = a2 - ab2 + b2;

    res.json({
        fgeneral1: fg1,
        fbase1: fb1,
        fbase21: fb21,
        fbase31: fr1,
        total1: r1,
        fgeneral2: fg2,
        fbase2: fb2,
        fbase22: fb22,
        fbase32: fr2,
        total2: r2
    });*/
    const a = parseInt(req.params.a); // Coeficiente de x^2
    const b = parseInt(req.params.b); // Coeficiente de x
    const c = parseInt(req.params.c); // Término independiente

    // Validación de coeficientes
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return res.status(400).json({ error: 'Por favor, ingresa valores válidos para a, b y c.' });
    }

    // Verifica si es un trinomio cuadrado perfecto
    const raizA = Math.sqrt(a); // Raíz del coeficiente de x^2
    const raizC = Math.sqrt(c); // Raíz del término independiente
    const esTrinomioCuadradoPerfecto = raizA % 1 === 0 && raizC % 1 === 0 && b === -2 * raizA * raizC;

    let resultadoFactorizacion;
    if (esTrinomioCuadradoPerfecto) {
        // Factorización como (a - b)^2
        const signo = b > 0 ? '+' : '-';
        resultadoFactorizacion = `(${raizA}x ${signo} ${Math.abs(raizC)})^2`;
    } else {
        resultadoFactorizacion = 'El trinomio no es un cuadrado perfecto.';
    }

    // Respuesta JSON
    res.json({
        trinomio: `${a}x^2 ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}`,
        esCuadradoPerfecto: esTrinomioCuadradoPerfecto,
        factorizacion: resultadoFactorizacion
    });
    
});

app.listen(3000,()=>{
    console.log('Framework ejecutandose con éxito');
});