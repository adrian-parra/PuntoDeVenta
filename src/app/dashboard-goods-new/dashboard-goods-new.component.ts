import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-goods-new',
  templateUrl: './dashboard-goods-new.component.html',
  styleUrls: ['./dashboard-goods-new.component.css']
})
export class DashboardGoodsNewComponent implements OnInit {

  articuloFormRegistro = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    categoria:new FormControl('',[Validators.required]),
    descripcion:new FormControl(''),
    disponible:new FormControl(''),
    vendido_por:new FormControl('',[Validators.required]),
    ref:new FormControl(''),
    precio:new FormControl('',[Validators.required]),
    coste:new FormControl('',[Validators.required ,Validators.min(0)]),
    codigo_barras:new FormControl(''),
    
    stock:new FormControl('0',[Validators.required]),
    stock_bajo:new FormControl('' ,[Validators.min(5)]),
    stock_optimo:new FormControl('' ,[Validators.min(10)]) ,
    proveedor_principal:new FormControl(''),
    compra_defecto:new FormControl('')

  });


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addArticulo(){
    
  }

  irListaArticulos(){
  this.router.navigate(['dashboard/goods/price'])
  }

}
