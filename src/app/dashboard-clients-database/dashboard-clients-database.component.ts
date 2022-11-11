import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cliente } from '../modelos/cliente';
import { ApiService } from '../servicios/api.service';
import { SharedTitleComponentService } from '../servicios/shared-title-component.service';

@Component({
  selector: 'app-dashboard-clients-database',
  templateUrl: './dashboard-clients-database.component.html',
  styleUrls: ['./dashboard-clients-database.component.css']
})
export class DashboardClientsDatabaseComponent implements OnInit {

  clientes:Cliente [] = []

  clientesDisponibles:Boolean = false

  constructor(private apiService:ApiService ,private router:Router ,
    private sharedTitleService:SharedTitleComponentService) {
      sharedTitleService.emitChange("Lista de clientes")
     }

  ngOnInit(): void {
    this.getClientes()
  }


  getClientes(){
    this.apiService.getClientes().subscribe((clientes:any) => {
        this.clientes = clientes

        if(this.clientes.length > 0) this.clientesDisponibles = true
        
    })
  }

  irAgregarCliente(){
    this.router.navigate(['dashboard/clients/createcustomer'])
  }

  irComponentePerfilCliente(id:number){
    this.router.navigate(['dashboard/clients/detailcustomer',id])
  }

}
