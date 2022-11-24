export interface HistorialInventario {
    id?:number,
    id_empleado:number,
    id_articulo:number,
    id_motivo:number,
    id_empresa?:number,
    referencia_id:any,
    ajuste:any,
    stock_final:any ,

    fecha_hora?:string,
    nombre?:string,
    nombre_empleado?:string,
    nombre_motivo?:string
}