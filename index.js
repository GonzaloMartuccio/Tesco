const Productos = [] ;
const carritos =  [] ;

class Producto {
    constructor(id,nombre,precio,img,descripcion = "Yerba sin palo"){
        this.id = id;
        this.nombre = nombre;  
        this.precio = precio; 
        this.img = img; 
        this.descripcion = descripcion;
        this.preciodto = precio * 0,9
    }

}

function DesplegarProductos(e) { 
       const card = `
           <div class="card">
               <h4>${e.nombre} </h4>
               <div>
                   <img src=${e.img} class="imgproducto" alt="foto del producto">
               </div>
               <div>
                   <p>${e.precio} </p> 
               </div>
               <div>
                   <p>${e.preciodto} </p> 
               </div>
               <div class="btn-container">
                   <button id=${e.id}  class="botonagregar">Agregar al carrito</button>
               </div>
               </div>
        `   
                   
          
       const container = document.getElementById('container')       
       container.innerHTML += card        
   }

let prod1 = new Producto('001', 'Yerba Canarias', 1500, './multimedia/yerba-canarias.jpg')
let prod2 = new Producto('002', 'Yerba Rei Verde', 1300, './multimedia/reiverde-yerba.jpg')
let prod3 = new Producto('003', 'Yerba Playadito', 1200, './multimedia/playadito-yerba.jpg')
let prod4 = new Producto('004', 'Yerba Sara', 1000, './multimedia/sara-roja-.png')

Productos.push(prod1, prod2, prod3, prod4)
console.log(Productos)

Productos.forEach(e =>{
   DesplegarProductos(e)
})

function loadCards(fil) {
    fil.forEach(e => {
        console.log (e);
        e.DesplegarProductos();

    });
    loadAddButtons(fil);
    saveMem(fil);
}