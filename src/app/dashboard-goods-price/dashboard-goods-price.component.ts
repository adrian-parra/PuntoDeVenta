import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  
  constructor(private apiService:ApiService , private router:Router) { }

  ngOnInit(): void {
    this.obtenerArticulos()
  }

  irAgregarArticulo(){
      this.router.navigate(['dashboard/goods/new'])
  }

  obtenerArticulos(){
    this.apiService.getArticulos().subscribe((articulos:any) => {

      this.articulos = articulos

      console.log(articulos)

      if(this.articulos .length > 0)this.articulosDisponibles = true
    })
  }

}
