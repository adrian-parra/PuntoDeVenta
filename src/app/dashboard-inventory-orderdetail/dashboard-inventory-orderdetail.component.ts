import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, DetachedRouteHandle, Params, Router } from '@angular/router';
import { DetalleOrdenDeCompra } from '../modelos/detalleOrdenCompra';
import { OrdenDeCompra } from '../modelos/ordenCompra';
import { ApiService } from '../servicios/api.service';
import { SharedTitleComponentService } from '../servicios/shared-title-component.service';

@Component({
  selector: 'app-dashboard-inventory-orderdetail',
  templateUrl: './dashboard-inventory-orderdetail.component.html',
  styleUrls: ['./dashboard-inventory-orderdetail.component.css']
})
export class DashboardInventoryOrderdetailComponent implements OnInit {


  idOrdenCompra:number = 0

  ordenDeCompra!:OrdenDeCompra

  detalleOrdenDeCompra:DetalleOrdenDeCompra []= []

  constructor(private apiService:ApiService ,private router:Router ,private route:ActivatedRoute ,
    private sharedTitleComponente:SharedTitleComponentService ) { 
      sharedTitleComponente.emitChange('Detalles de la orden de compra')
    }

  ngOnInit(): void {

    this.route.params.subscribe((params:Params) => {

      this.idOrdenCompra = params['id']
     this.getOrdenDeCompra(this.idOrdenCompra)
     this.getDetalleOrdenCompra(this.idOrdenCompra)
    })
  

  }

  irRecibirAriculos(id:number) {
    this.router.navigate(['dashboard/inventory/receiveorder' , this.idOrdenCompra ])
}
  getOrdenDeCompra(id:number){
    this.apiService.getOrdenDeCompra(id).subscribe(ordenDeCompra => {
      this.ordenDeCompra = ordenDeCompra
    })
  }

  getDetalleOrdenCompra(id:number){
    this.apiService.getDetallesOrdenDeCompra(id).subscribe(detallesOrdenDeCompra => {

      console.log(detallesOrdenDeCompra)
      this.detalleOrdenDeCompra = detallesOrdenDeCompra
    })
  }

  irOrdenesDeCompra() {
    this.router.navigate(['dashboard/inventory/purchase'])
  }

}
