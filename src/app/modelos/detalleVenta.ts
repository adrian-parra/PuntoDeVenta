export interface DetalleVenta {
    id_venta?:number ,
    id_articulo:number ,
    nombre_articulo?:string
    cantidad:number ,
    costo:number ,
    total:number ,
    stock_articulo?:number
}