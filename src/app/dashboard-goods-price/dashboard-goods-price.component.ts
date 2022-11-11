import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-goods-price',
  templateUrl: './dashboard-goods-price.component.html',
  styleUrls: ['./dashboard-goods-price.component.css']
})
export class DashboardGoodsPriceComponent implements OnInit {

  articulosDisponibles:Boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  irAgregarArticulo(){

  }

}
