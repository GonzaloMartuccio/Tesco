let totalCompra = 0
let claseYerba = parseInt(
    prompt(
        'Ingresa aqui la yerba que deseas comprar: 1.Canarias - 2.ReiVerde - 3.Sara - 4.Playadito'
        )

) 

const TipoMate = ["Madera", "Plastico", "Vidrio"]

let continuarCompra = true
let decision

while (continuarCompra === true) {
 if(claseYerba === 1){
        totalCompra = totalCompra + 150
 } else if (claseYerba === 2){
        totalCompra = totalCompra + 120
 } else if (claseYerba === 3){
        totalCompra = totalCompra + 100
 } else if (claseYerba === 4){
        totalCompra = totalCompra + 95
 } else {
    claseYerba = parseInt(prompt('Ingresa un producto existente:'))
    continue
 } 
 
    
 decision = parseInt(prompt('Quieres seguir agregando productos? 1.Si - 2.No'))
 if (decision===1){
    claseYerba = parseInt(prompt('Ingresa aqui la yerba que deseas comprar: 1.Canarias - 2.ReiVerde - 3.Sara - 4.Playadito'))
 } else if (decision===2){
    continuarCompra = false

 }

}

alert ('Compra total sin descuentos ni impuestos es: '+totalCompra)

function calcularPrecioConDescuento (valor){
let descuento = 0 
if (valor<=300){
    descuento = 10
} else if (valor>300 && valor<=400){
    descuento = 20
} else if (valor>500 && valor<=600){
    descuento = 25
} else { 
    descuento = 30
}

let valorDescuento = valor *(descuento/100)
valor = valor - valorDescuento
return valor
}

let valorDescuento = calcularPrecioConDescuento(totalCompra)
alert ('Total de la compra sin impuesto es: '+valorDescuento)


function calcularPrecioConImpuestos (valor){
    const impuestos = valor * (21/100)
    return valor + impuestos
}

let valorFinalConImpuesto = calcularPrecioConImpuestos(valorDescuento)
alert ('Total de compra a pagar es: '+valorFinalConImpuesto)
 
const a = [claseYerba, calcularPrecioConDescuento, calcularPrecioConImpuestos ]
const b = [1, true, "Hi"]

console.log(a)
console.log(a[2])

console.log(TipoMate)
TipoMate.push("Aluminio")

