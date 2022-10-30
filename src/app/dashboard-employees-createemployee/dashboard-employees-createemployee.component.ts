import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-dashboard-employees-createemployee',
  templateUrl: './dashboard-employees-createemployee.component.html',
  styleUrls: ['./dashboard-employees-createemployee.component.css']
})
export class DashboardEmployeesCreateemployeeComponent implements OnInit {
  
  empleadoFormRegistro = new FormGroup({
    id_usuario: new FormControl(null),
    nombre: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    telefono: new FormControl('' ,[Validators.required ,Validators.minLength(10) ,Validators.maxLength(10) ,Validators.pattern("[0-9]*")]) ,
    estatus:new FormControl('a'),
    id_nombre_empresa: new FormControl(),
    id_rol:new FormControl(),
    correo: new FormControl('' ,[Validators.email ,Validators.required]) ,
    clave: new FormControl('' ,[Validators.minLength(8) ,Validators.required]) ,
    rol: new FormControl('' ,[Validators.required ]) ,
  });

  constructor(private router:Router ,public apiService:ApiService ,private cookie:CookieService) { }

  ngOnInit(): void {
  }

  agregarEmpleado() {
    
    let rol = this.empleadoFormRegistro.controls.rol.value
    let id_rol = this.empleadoFormRegistro.controls.id_rol

    this.empleadoFormRegistro.controls.id_nombre_empresa.setValue(this.cookie.get('id_nombre_empresa'))

    if(rol == "Administrador"){
      id_rol.setValue(4)
    }else if(rol == "Gerente"){
      id_rol.setValue(3)
    }else if(rol == "Cajero"){
      id_rol.setValue(2)
    }

  
    this.apiService.addEmpleado(this.empleadoFormRegistro.value).subscribe((r:any) =>{
      if(r['0'] == true){
        this.empleadoFormRegistro.reset
        alert("Cuenta creada")
      }else {
        alert(r['2'])
      }
    })
  

  }

  irComponenteListaEmpleados(){
    this.router.navigate(['dashboard/employees/list'])
  }

}
