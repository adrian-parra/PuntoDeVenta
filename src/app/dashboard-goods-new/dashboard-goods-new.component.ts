import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CategoriaArticulo } from '../modelos/categoriaArticulo';
import { Proveedor } from '../modelos/proveedor';
import { ApiService } from '../servicios/api.service';
import { SharedTitleComponentService } from '../servicios/shared-title-component.service';

@Component({
  selector: 'app-dashboard-goods-new',
  templateUrl: './dashboard-goods-new.component.html',
  styleUrls: ['./dashboard-goods-new.component.css']
})
export class DashboardGoodsNewComponent implements OnInit {

  categoriasArticulos:CategoriaArticulo[] = []
  proveedores:Proveedor[] = []

  articuloFormRegistro = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    id_categoria:new FormControl('',[Validators.required]),
    descripcion:new FormControl(null),
    disponible:new FormControl(true),
    id_vendido_por:new FormControl('',[Validators.required]),
    ref:new FormControl(null),
    precio:new FormControl('',[Validators.required]),
    coste:new FormControl('',[Validators.required ,Validators.min(0)]),
    codigo_barras:new FormControl(null),
    //CONTROLES PARA TABLE INVENTARIO
    stock:new FormControl(0,[Validators.required]),
    stock_bajo:new FormControl(null ,[Validators.min(5)]),
    stock_optimo:new FormControl(null ,[Validators.min(10)]) ,
    id_proveedor_principal:new FormControl(null),
    compra_defecto:new FormControl(null),
    
    id_empresa:new FormControl(this.cookie.get('id_nombre_empresa')),
    //CONTROLES SIN FUNCION POR EL MOMENTO
    id_impuesto:new FormControl(null) ,
    id_color:new FormControl(null) ,
    ruta_imagen:new FormControl(null)

  });


  constructor(private router:Router ,private apiSrvice:ApiService ,public cookie:CookieService ,
    private sharedTitleComponente:SharedTitleComponentService) {
      sharedTitleComponente.emitChange('Crear artículo')
     }

  ngOnInit(): void {
    this.getCategoriasArticulos()
    this.getProveedores()
  }

  addArticulo(){
 
    this.apiSrvice.addArticulo(this.articuloFormRegistro.value).subscribe((options:any) => {
      if(options['0'] == true){
        alert("Articulo agregado")
        this.router.navigate(['dashboard/goods/price'])
      }else {
        alert(options['2'])
      }

    })
  }

  getProveedores(){
    this.apiSrvice.getProveedores().subscribe(proveedores => this.proveedores = proveedores)
  }

  getCategoriasArticulos(){
    this.apiSrvice.getCategoriasArticulos().subscribe(categoriasArticulos => {
      this.categoriasArticulos = categoriasArticulos
    })
  }

  irListaArticulos(){
  this.router.navigate(['dashboard/goods/price'])
  }

}
