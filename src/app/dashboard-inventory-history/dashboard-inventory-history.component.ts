import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistorialInventario } from '../modelos/historialInventario';
import { ApiService } from '../servicios/api.service';
import { SharedTitleComponentService } from '../servicios/shared-title-component.service';

@Component({
  selector: 'app-dashboard-inventory-history',
  templateUrl: './dashboard-inventory-history.component.html',
  styleUrls: ['./dashboard-inventory-history.component.css']
})
export class DashboardInventoryHistoryComponent implements OnInit {

  historialInventario:HistorialInventario[] = []

  historialDisponibles:boolean = false

  constructor(private apiService:ApiService ,private sharedTitleComponente:SharedTitleComponentService ,
    private router:Router) {
    sharedTitleComponente.emitChange('Historial de inventario')
   }

  ngOnInit(): void {
    this.getHistorialInventario()
  }

  getHistorialInventario(){
    this.apiService.getHistorialInventario().subscribe(historial => {
      this.historialInventario = historial


      if(this.historialInventario.length > 0)this.historialDisponibles = true

      console.log(this.historialInventario.length)
    })
  }

  irDetalleOrdenDeCompra(id:any){
      this.router.navigate(['dashboard/inventory/orderdetail',id])
  }  

}
