import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    id_nombre_empresa: new FormControl(null),
    direccion: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    ciudad: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    estado: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    nota: new FormControl(null) ,
    codigo_postal: new FormControl('' ,[Validators.required ,Validators.minLength(5) ,Validators.maxLength(5) ,Validators.pattern("[0-9]*")]) ,
  });

  constructor() { }

  ngOnInit(): void {
  }

  addCliente() {
    
  }

}
