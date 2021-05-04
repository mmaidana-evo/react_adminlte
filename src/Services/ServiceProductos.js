import instance from "../Config/Axios"

export function getProductos(){
    return instance.get("items")
}

export function getProducto(id){
    return instance.get("items/"+id)
}