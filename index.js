
class ProductManager{
    constructor () {
        this.products=[]
    }
    addProduct(title,description,price,thumbnail,code,stock,){
        if (title!='' && description!='' && price!=0 && thumbnail!='' && code!='' && stock!=0){
            let id=0;
            for (let i=0; i< this.products.length; i++){
                if (this.products[i].code === code){
                    console.log("No se puede ingresar productos con el mismo codigo")
                }else{
                    const element= this.products[i]
                    if (element.id > id) {
                        id= element.id
                    }
                    
                }
            }
            id++
            this.products.push({id:id, title, description,price,thumbnail,code,stock})
        }else{
            console.log("Debe ingresar los valores para agregar el producto")
        }

    }
    getProducts(){
        console.log(this.products)
    }
    getProductById(){

    }
}

const producto= new ProductManager

producto.addProduct("producto prueba","Este es un produco prueba",200,"Sin imagen","abc123",25)
console.log(producto.getProducts())