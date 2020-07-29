var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);


var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var xi, yi, xf, yf, nxi, nyi, nxf, nyf;
    var colorcito = "red";
    var color="#b80003";
    var espacio = ancho / lineas;
    
    for(l = 0; l < lineas; l ++)
    {
        yi = espacio * l;
        xf = espacio * (l ++);
        nyi = ancho - (espacio * l);
        nxf = espacio * l;
        xi = ancho - (espacio * l);
        yf = espacio * l;
        nxi = espacio * l;
        nyf = espacio * ( l++ );
        dibujarLinea(color, nxi, 0, ancho, nyf);
        dibujarLinea(color, xi, 0, 0, yf);
        dibujarLinea(color, ancho, nyi, nxf, ancho);
        dibujarLinea(color, 0, yi, xf, ancho);   
    }

    dibujarLinea("colorcito",1,1,1,ancho)
    dibujarLinea("colorcito",1,ancho,ancho,ancho)
    dibujarLinea("colorcito",ancho,ancho,ancho,1)
    dibujarLinea("colorcito",ancho,1,1,1)
}