import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cliente } from '../modelos/cliente';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-dashboard-clients-database',
  templateUrl: './dashboard-clients-database.component.html',
  styleUrls: ['./dashboard-clients-database.component.css']
})
export class DashboardClientsDatabaseComponent implements OnInit {

  clientes:Cliente [] = []

  constructor(private apiService:ApiService ,private router:Router) { }

  ngOnInit(): void {
    this.getClientes()
  }


  getClientes(){
    this.apiService.getClientes().subscribe((clientes:any) => {
        this.clientes = clientes
    })
  }

  irAgregarCliente(){
    this.router.navigate(['dashboard/clients/createcustomer'])
  }

  irComponentePerfilCliente(id:number){
    this.router.navigate(['dashboard/clients/detailcustomer',id])
  }

}
