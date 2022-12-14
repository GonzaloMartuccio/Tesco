const Productos = [] ;
const carritos =  [] ;

class Producto {
    constructor(id,nombre,precio,img,descripcion = "Yerba sin palo", preciodto){
        this.id = id;
        this.nombre = nombre;  
        this.precio = precio; 
        this.img = img; 
        this.descripcion = descripcion;
        
    }

}


function DesplegarProductos(e) { 
       const card = `
           <div class="card">
               
               <div>
                    <h4>${e.nombre} </h4>
                   <img src=${e.img} class="imgproducto" alt="foto del producto">
               </div>

               <div class="price">
                   <p>${e.precio} </p> 
               </div> 
                          
               <div class="btncontainer">
                   <button id="boton1"> Agregar al carrito</button>
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



const boton1 = document.getElementById('boton1')
const imgproducto = document.querySelector ('.imgproducto')


boton1.addEventListener('click', clickFunction)
function clickFunction(){
    console.log('Click en agregar carrito')
    Swal.fire({
        title:'Exitoso',
        text: 'Producto Agregado al carrito',
        icon: 'success',
        showConfirmButton:false
    })
}

imgproducto.addEventListener('mousemove', moveFunction)
function moveFunction(){
    console.log('Moviendo mouse en imagen del producto')
}



