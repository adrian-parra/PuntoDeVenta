import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CategoriaArticulo } from '../modelos/categoriaArticulo';
import { Proveedor } from '../modelos/proveedor';
import { ApiService } from '../servicios/api.service';
import { SharedTitleComponentService } from '../servicios/shared-title-component.service';

@Component({
  selector: 'app-dashboard-goods-edit',
  templateUrl: './dashboard-goods-edit.component.html',
  styleUrls: ['./dashboard-goods-edit.component.css']
})
export class DashboardGoodsEditComponent implements OnInit {
  
  categoriasArticulos:CategoriaArticulo[] = []
  proveedores:Proveedor[]=[]

  articuloFormRegistro = new FormGroup({
    id:new FormControl(),
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    nombre_categoria:new FormControl('',[Validators.required]),
    descripcion:new FormControl(null),
    disponible:new FormControl(),
    vendido_por:new FormControl('',[Validators.required]),
    ref:new FormControl(null),
    precio:new FormControl('',[Validators.required]),
    coste:new FormControl('',[Validators.required ,Validators.min(0)]),
    codigo_barras:new FormControl(null),
    //CONTROLES PARA TABLE INVENTARIO
    stock:new FormControl(0,[Validators.required]),
    stock_bajo:new FormControl(null ,[Validators.min(5)]),
    stock_optimo:new FormControl(null ,[Validators.min(10)]) ,
    proveedor_principal:new FormControl(null),
    compra_defecto:new FormControl(null),
    
    //CONTROLES SIN FUNCION POR EL MOMENTO
    id_impuesto:new FormControl(null) ,
    id_color:new FormControl(null) ,
    ruta_imagen:new FormControl(null)

  });

  constructor(private router:Router ,private apiSrvice:ApiService ,public cookie:CookieService ,private route:ActivatedRoute ,
    private sharedTitleComponente:SharedTitleComponentService) {
      sharedTitleComponente.emitChange('Editar artículo')
     }

  ngOnInit(): void {
    this.getCategoriasArticulos()
    this.getProveedores()

      this.route.params.subscribe((params:Params) => {
        this.getArticulo(params['id'])
      })
    //this.getArticulo()
  }

  getProveedores(){
    this.apiSrvice.getProveedores().subscribe(proveedores =>this.proveedores = proveedores)
  }

  getCategoriasArticulos(){
    this.apiSrvice.getCategoriasArticulos().subscribe(categoriasArticulos => {
      this.categoriasArticulos = categoriasArticulos
    })
  }

  irListaArticulos(){
  this.router.navigate(['dashboard/goods/price'])
  }

  getArticulo(id:number){
    this.apiSrvice.getArticulo(id).subscribe((articulo:any) => {
      console.log(articulo)

      this.articuloFormRegistro.patchValue(articulo)

      
    })
  }

  updateArticulo(){
    //console.log(JSON.stringify(this.articuloFormRegistro.value))

    this.apiSrvice.updateArticulo(this.articuloFormRegistro.value).subscribe(r => {
      if(r['0'] == true){
        alert("Articulo editado")
        this.router.navigate(['dashboard/goods/price'])
      }else {
        alert(r['2'])
      }
    })
  }

}
