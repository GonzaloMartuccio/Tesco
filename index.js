 const productos = []
 const carritos =  []
 
 class Producto{
    constructor(id, nombre, precio, img, descripcion = 'Yerba sin palo' ){
        this.id = id;
        this.nombre = 'Yerba Canarias';  
        this.precio = 1200; 
        this.img = img; 
        this.descripcion = 'Yerba sin palo'; 

    }

    DesplegarProductos(){
        const card = `
            <div class="card">
                <h4>$(this.nombre)</h4>
                <div>
                    <img class="imgproducto" src= $(this.img) alt="foto del producto">
                </div>
                <div>
                    <p>$(this.precio)/p> 
                </div>
                <div class="btn-container">
                    <button id=$(this.id) class="botonagregar">Agregar al carrito</button>
                </div>

            </div>
                    
           
        const container = document.getElementById('container')
        container.innerHTML += card 
        `
    }
}

 let prod1 = new Producto('001', 'Yerba Canarias', 1500, './multimedia/yerba-canarias.jpg')
 let prod2 = new Producto('002', 'Yerba Rei Verde', 1300, './multimedia/reiverde-yerba.jpg')
 let prod3 = new Producto('003', 'Yerba Playadito', 1200, './multimedia/playadito-yerba.jpg')
 let prod4 = new Producto('004', 'Yerba Sara', 1000, './multimedia/sara-roja.png')

productos.push(prod1, prod2, prod3, prod4)
console.log(productos)

productos.forEach(e =>{
    e.DesplegarProductos()
})