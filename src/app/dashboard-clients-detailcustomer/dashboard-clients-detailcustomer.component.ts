import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cliente } from '../modelos/cliente';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-dashboard-clients-detailcustomer',
  templateUrl: './dashboard-clients-detailcustomer.component.html',
  styleUrls: ['./dashboard-clients-detailcustomer.component.css']
})
export class DashboardClientsDetailcustomerComponent implements OnInit {

  cliente?:Cliente

  constructor(private router:Router ,private readonly route: ActivatedRoute ,
    private apiService:ApiService) { }
  

  ngOnInit(): void {

    this.route.params.subscribe((params:Params) => {
      this.getCliente(params['id'])
    })
  }

  irComponenteListarClientes(){
    this.router.navigate(['dashboard/clients/database'])
  }

  getCliente(id:number){
    

    this.apiService.getCliente(id).subscribe((cliente:Cliente) => {
        this.cliente = cliente

        console.log(cliente)
    })
  }

}
