export interface OrdenDeCompra {
    id:number,
    estado:string ,
    empleado?:string,
    recibido:number ,
    fecha_orden:string ,
    fecha_espera:string ,
    total:number,
    total_articulos:number ,
    proveedor?:string
}