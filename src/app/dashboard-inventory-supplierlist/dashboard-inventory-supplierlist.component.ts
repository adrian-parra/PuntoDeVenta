import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from '../modelos/proveedor';
import { ApiService } from '../servicios/api.service';
import { SharedTitleComponentService } from '../servicios/shared-title-component.service';

@Component({
  selector: 'app-dashboard-inventory-supplierlist',
  templateUrl: './dashboard-inventory-supplierlist.component.html',
  styleUrls: ['./dashboard-inventory-supplierlist.component.css']
})
export class DashboardInventorySupplierlistComponent implements OnInit {
  proveedores:Proveedor [] = []
  proveedoresDisponibles:Boolean = false
  constructor(private apiService:ApiService ,private router:Router ,
    private sharedTitleComponente:SharedTitleComponentService) {
      this.sharedTitleComponente.emitChange('Proveedores')
     }

  ngOnInit(): void {

 
    this.getProveedores()
  }
  
  irAgregarProveedor(){
    this.router.navigate(['dashboard/inventory/suppliercreate'])

    
  }

  irEditarProveedor(id:number){
    this.router.navigate(['dashboard/inventory/supplieredit' ,id])
  }

  getProveedores(){
    this.apiService.getProveedores().subscribe(proveedores =>{
      console.log(proveedores.length)

      this.proveedores = proveedores

      if(this.proveedores.length > 0) this.proveedoresDisponibles = true
    })
  }
}
