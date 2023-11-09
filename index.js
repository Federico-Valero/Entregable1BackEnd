
class ProductManager{
    constructor () {
        this.products=[]
    }
    addProduct(title,description,price,thumbnail,code,stock,){
        if (title!='' && description!='' && price!=0 && thumbnail!='' && code!='' && stock!=0){
            const sameCode = this.products.find ((element)=> (element.code === code))
            if (sameCode){
                console.log("No se puede ingresar productos con el mismo codigo")
            }else{
                let id=0;
                for (let i=0; i< this.products.length; i++){
                    const element= this.products[i]
                    if (element.id > id) {
                        id= element.id
                    }
                }
                id++
                this.products.push({id:id, title, description,price,thumbnail,code,stock})
            }
            
            
        }else{
            console.log("Debe ingresar los valores para agregar el producto")
        }

    }
    getProducts(){
        console.log(this.products)
    }
    getProductById(id){
        const findProduct = this.products.find ((product)=>(product.id == id))
        if(findProduct){
            console.log(this.products[id-1])
        }else{
            console.log("No existe el producto con id " + id)
        }
    }
}

const producto= new ProductManager

console.log(producto.getProducts())
producto.addProduct("producto prueba","Este es un produco prueba",200,"Sin imagen","abc123",25)
console.log(producto.getProducts())
producto.addProduct("producto prueba2","Este es un produco prueba2",200,"Sin imagen","abc123",25)
producto.addProduct("producto prueba2","Este es un produco prueba2",200,"Sin imagen","abc124",25)
producto.addProduct("producto prueba2","Este es un produco prueba2",200,"Sin imagen","abc125",25)
producto.getProductById(2)
producto.getProductById(8)
producto.getProductById(3)