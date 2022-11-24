import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenDeCompra } from '../modelos/ordenCompra';
import { ApiService } from '../servicios/api.service';
import { SharedTitleComponentService } from '../servicios/shared-title-component.service';

@Component({
  selector: 'app-dashboard-inventory-purchase',
  templateUrl: './dashboard-inventory-purchase.component.html',
  styleUrls: ['./dashboard-inventory-purchase.component.css']
})
export class DashboardInventoryPurchaseComponent implements OnInit {
  
  ordenesDeCompraDisponibles:boolean = false
  ordenDeCompra:OrdenDeCompra[]=[]

  constructor(private router:Router ,private apiService:ApiService ,
    private sharedTitleComponente:SharedTitleComponentService) {
      sharedTitleComponente.emitChange('Órdenes de compra')
     }

  ngOnInit(): void {
    this.getOrdenesDeCompra()
  }

  irAgregarOrdenDeCompra(){
    this.router.navigate(['dashboard/inventory/createorder'])
  }

  irDetalleOrdenCompra(id:number){
    this.router.navigate(['dashboard/inventory/orderdetail',id])
  }

  getOrdenesDeCompra(){
  this.apiService.getOrdenesDeCompra().subscribe(ordenes => {
    this.ordenDeCompra = ordenes

    if(this.ordenDeCompra.length > 0)this.ordenesDeCompraDisponibles = true
  })
  }

}
