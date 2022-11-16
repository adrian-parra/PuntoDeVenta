import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from '../modelos/proveedor';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-dashboard-inventory-supplierlist',
  templateUrl: './dashboard-inventory-supplierlist.component.html',
  styleUrls: ['./dashboard-inventory-supplierlist.component.css']
})
export class DashboardInventorySupplierlistComponent implements OnInit {
  proveedores:Proveedor [] = []
  proveedoresDisponibles:Boolean = false
  constructor(private apiService:ApiService ,private router:Router) { }

  ngOnInit(): void {
    this.getProveedores()
  }
  
  irAgregarProveedor(){
    this.router.navigate(['dashboard/inventory/suppliercreate'])
  }

  irEditarProveedor(id:number){

  }

  getProveedores(){
    this.apiService.getProveedores().subscribe(proveedores =>{
      console.log(proveedores.length)

      this.proveedores = proveedores

      if(this.proveedores.length > 0) this.proveedoresDisponibles = true
    })
  }
}
