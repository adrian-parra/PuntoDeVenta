import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-employees-createemployee',
  templateUrl: './dashboard-employees-createemployee.component.html',
  styleUrls: ['./dashboard-employees-createemployee.component.css']
})
export class DashboardEmployeesCreateemployeeComponent implements OnInit {
  
  empleadoFormRegistro = new FormGroup({
    nombre: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    correo: new FormControl('' ,[Validators.email ,Validators.required]) ,
    telefono: new FormControl('' ,[Validators.required ,Validators.minLength(10) ,Validators.maxLength(10) ,Validators.pattern("[0-9]*")]) ,
    rol: new FormControl('' ,[Validators.required ]) ,
  });

  constructor() { }

  ngOnInit(): void {
  }

  agregarEmpleado() {

  }

  irComponenteListaEmpleados(){
    
  }

}
