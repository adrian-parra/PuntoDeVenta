import { asNativeElements, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { __values } from 'tslib';
import { Articulo } from '../modelos/articulo';
import { DetalleOrdenDeCompra } from '../modelos/detalleOrdenCompra';
import { Proveedor } from '../modelos/proveedor';
import { ApiService } from '../servicios/api.service';
import { SharedTitleComponentService } from '../servicios/shared-title-component.service';

@Component({
  selector: 'app-dashboard-inventory-createorder',
  templateUrl: './dashboard-inventory-createorder.component.html',
  styleUrls: ['./dashboard-inventory-createorder.component.css']
})
export class DashboardInventoryCreateorderComponent implements OnInit {

  articulos:Articulo[] = []
  detalleArticulo:Articulo[] = []

  detalleOrdenDeCompra:DetalleOrdenDeCompra[]=[]
  detalleOrdenCompra!:DetalleOrdenDeCompra

  proveedores:Proveedor[]=[]
  constructor(private apiService:ApiService ,private cookie:CookieService ,private router:Router,
    private sharedTitleComponente:SharedTitleComponentService) {
      sharedTitleComponente.emitChange('Crear orden de compra')
     }


  ordenCompraFormRegistro = new FormGroup({
    id_proveedor: new FormControl('',[Validators.required]),
    fecha_orden:new FormControl('',[Validators.required]) ,
    fecha_espera:new FormControl('',[Validators.required]),
    anotaciones:new FormControl(''),
    id_articulo:new FormControl('' ,[Validators.required]),
    id_tienda:new FormControl(this.cookie.get('id_nombre_empresa')),
    total:new FormControl(''),
    id_empleado:new FormControl(this.cookie.get('id_empleado'))
  });

  ngOnInit(): void {
    this.getArticulos()
    this.getProveedores()
  }


  

  addOrdenCompra():any{

    let itemsTable = document.querySelectorAll('.contenedor-element-table');
    let inputVacio = false

    let totalAcumulado:number = 0;

    //VERIFICAR QUE NINGUN INPUT ESTE VACIO
    itemsTable.forEach(element => {
      let ref_cantidad = element.querySelector('div #cantidad') as HTMLInputElement;
        let cantidad = ref_cantidad.value

        let ref_costo = element.querySelector('div #costo') as HTMLInputElement;
        let costo = ref_costo.value

        if(cantidad == "" || costo == ""){
          inputVacio = true
          
        }
    })

    if(inputVacio){
      alert("Error con detalle del pedido ,verifiue porfavor.")
      return false
    }

  //LLENAR ARREGLO ORDEN DE COMPRA A PARTIR DEL DOM TABLE ORDEN DE COMPRA
      itemsTable.forEach(element => {
        let ref_id_articulo = element.querySelector('div #ref') as HTMLInputElement;
        let id_articulo = ref_id_articulo.innerText

        let ref_cantidad = element.querySelector('div #cantidad') as HTMLInputElement;
        let cantidad = ref_cantidad.value

        let ref_costo = element.querySelector('div #costo') as HTMLInputElement;
        let costo = ref_costo.value

        let ref_total = element.querySelector('div #costoTotal') as HTMLInputElement;
        let total = ref_total.innerText

        totalAcumulado = totalAcumulado + parseFloat(total)

        this.detalleOrdenCompra = {id_articulo:parseInt(id_articulo) ,cantidad:parseInt(cantidad) ,costo:parseFloat(costo) ,total:parseFloat(total)}
        
        this.detalleOrdenDeCompra.push(this.detalleOrdenCompra)

        
      });

      this.ordenCompraFormRegistro.controls.total.setValue(totalAcumulado.toString())

      //console.log(JSON.stringify(this.ordenCompraFormRegistro.value))
      //GUARDAR REGISTRO ORDEN DE COMPRA
      this.apiService.addOrdenDeCompra(this.ordenCompraFormRegistro.value).subscribe(options => {
        //SI LA RESPUESTA ES CORRECTA SE DEBEN GUARDAR LOS REGISTROS DEL DETALEE ORDEN DE COMPRA

        if (options['0'] == true) {
          alert('Orden de compra registrada');
          
          for(let detalleOrdenCompra of this.detalleOrdenDeCompra){
            detalleOrdenCompra.id_orden_de_compra = options['id']

            this.apiService.addDetalleOrdenDeCompra(detalleOrdenCompra).subscribe()
          }

          this.router.navigate(['dashboard/inventory/purchase'])
        } else {
          alert(options['2']);
        }
      })

     
    

    
  }
   
  deleteDetalleArticulo(id:number){
    const temArr = this.detalleArticulo.filter(articulo => articulo.id !== id)
    this.detalleArticulo = [...temArr]
  }

  obtenerArticulo($event:any){
    
    console.log(this.ordenCompraFormRegistro.value)

    let id:any = this.ordenCompraFormRegistro.controls.id_articulo.value
    let articuloEncontrado = false

    let articuloDetalleEncontrado = false

    for (let articulo of this.articulos){
      if(articulo.id == id){
          articuloEncontrado = true
      }
    }

    //VERIFICAR QUE ARTICULO NO ESTE YA AGREGADO
    for (let articulo of this.detalleArticulo){
      if(articulo.id == id) articuloDetalleEncontrado = true
    }

    if(articuloDetalleEncontrado){
      $event.target.value = ""
      alert("articulo ya fue agregado")
    }else {
      if(articuloEncontrado){
        this.getArticulo(id)
        $event.target.value = ""
      }else{
        if(id != ""){
          this.ordenCompraFormRegistro.controls.id_articulo.setValue("")
          
        }
       
        
      }
    }

    

}

irListaOrdenesDeCompra(){
  this.router.navigate(['dashboard/inventory/purchase'])
}

obtenerCostoTotal($event:any ,option:number):any{
  var elemento = $event.target as HTMLElement;

  var contenedor = elemento.parentNode?.parentNode

 var inputCosto = contenedor?.querySelector('div #costo') as HTMLInputElement | null;
 var inputCantidad = contenedor?.querySelector('div #cantidad') as HTMLInputElement | null;

 const costoTotal = contenedor?.querySelector('#costoTotal') as HTMLInputElement | null;
  


  if(option == 1){
    //METODO FUE LLAMADO POR EL METODO cCantidad

    //VERIFICAR QUE INPUT CANTIDAD NO VENGA VACIO
    if(inputCantidad?.value == "") {
      costoTotal!.innerText = ""
      return false}

    if(inputCosto?.value !== ""){
      //SI EL INPUT DE COSTO ES DIFERNTE DE VACIO 
      //SE PUEDE SEGUIR CON LAS OPERACIONES

      //OBTENEMOS EL COSTO TOTAL
      let total = parseInt(inputCantidad!.value) * parseFloat(inputCosto!.value)
      costoTotal!.innerText = total.toString()
    }

  }else{
    //METODO FUE LLAMADO POR EL METODO cCosto
  
      //VERIFICAR QUE INPUT costo NO VENGA VACIO
      if(inputCosto?.value == ""){
        costoTotal!.innerText = ""
        return false}

    if(inputCantidad?.value !== ""){
      //SI EL INPUT DE COSTO ES DIFERNTE DE VACIO 
      //SE PUEDE SEGUIR CON LAS OPERACIONES

      //OBTENEMOS EL COSTO TOTAL
      let total = parseInt(inputCantidad!.value) * parseFloat(inputCosto!.value)
      costoTotal!.innerText = total.toString()
    }
  }

  
  
}


getArticulo(id:number){
  this.apiService.getArticulo(id).subscribe(articulo => this.detalleArticulo.push(articulo))
}
  


  getArticulos(){
      this.apiService.getArticulos().subscribe((articulos:any) => {
        this.articulos = articulos
      })
  }

  getProveedores(){
    this.apiService.getProveedores().subscribe(proveedores => {
        this.proveedores = proveedores
    })
  }

}
