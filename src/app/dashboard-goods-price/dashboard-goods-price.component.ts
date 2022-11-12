import { Component, OnInit } from '@angular/core';
import { Articulo } from '../modelos/articulo';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-dashboard-goods-price',
  templateUrl: './dashboard-goods-price.component.html',
  styleUrls: ['./dashboard-goods-price.component.css']
})
export class DashboardGoodsPriceComponent implements OnInit {
  
  articulos:Articulo [] = []

  articulosDisponibles:Boolean = false

  
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.obtenerArticulos()
  }

  irAgregarArticulo(){

  }

  obtenerArticulos(){
    this.apiService.getArticulos().subscribe((articulos:any) => {

      this.articulos = articulos

      console.log(articulos)

      if(this.articulos .length > 0)this.articulosDisponibles = true
    })
  }

}
