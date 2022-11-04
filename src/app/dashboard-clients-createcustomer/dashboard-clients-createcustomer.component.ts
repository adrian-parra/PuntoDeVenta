import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Cliente } from '../modelos/cliente';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-dashboard-clients-createcustomer',
  templateUrl: './dashboard-clients-createcustomer.component.html',
  styleUrls: ['./dashboard-clients-createcustomer.component.css']
})
export class DashboardClientsCreatecustomerComponent implements OnInit {

  clienteFormRegistro = new FormGroup({
    nombre: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    correo: new FormControl('' ,[Validators.email ,Validators.required]) ,
    telefono: new FormControl('' ,[Validators.required ,Validators.minLength(10) ,Validators.maxLength(10) ,Validators.pattern("[0-9]*")]) ,
    id_empresa: new FormControl(),
    direccion: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    ciudad: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    estado: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    nota: new FormControl(null) ,
    codigo_postal: new FormControl('' ,[Validators.required ,Validators.minLength(5) ,Validators.maxLength(5) ,Validators.pattern("[0-9]*")]) ,
  });

  constructor(private apiService:ApiService ,
    private router:Router ,
    private cookie:CookieService ) { }

  ngOnInit(): void {
  }

  addCliente() {


    this.clienteFormRegistro.controls.id_empresa.setValue(this.cookie.get("id_nombre_empresa"))

    this.apiService.addCliente(this.clienteFormRegistro.value).subscribe((r:any) =>{
      if(r['0'] == true){
        alert("Cliente registrado")
        this.router.navigate(['dashboard/clients/database'])
      }else {
        alert(r['2'])
      }
    })
  }

}
