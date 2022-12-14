import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Empleado } from '../modelos/empleado';
import { ApiService } from '../servicios/api.service';
import { SharedTitleComponentService } from '../servicios/shared-title-component.service';

@Component({
  selector: 'app-dashboard-employees-list',
  templateUrl: './dashboard-employees-list.component.html',
  styleUrls: ['./dashboard-employees-list.component.css']
})
export class DashboardEmployeesListComponent implements OnInit {


  empleados:Empleado[] = []

  constructor(
    public apiService:ApiService ,
    private router:Router ,
    private cookie:CookieService ,
    private sharedTitleService:SharedTitleComponentService) {
      //ENVIA DATOS POR SERVICIO 
      //EN ESTE CASO SE LE ENVIA EL TITULO DE LA INTERFAZ 
      //ACTUAL AL COMPONENTE PADRE QUE DASHBOARD 
      this.sharedTitleService.emitChange("Lista de empleados");
    }

  ngOnInit(): void {
    this.getEmpleados()
  }
  
  irComponenteEditarEmpleado(id:number){

    //GUARDAR ID EN COOKIE PARA SEGURIDAD
    this.cookie.set('id_empleado' ,id.toString())
    //ENVIAR PARAMETRO POR COOKIE PARA EDITAR EMPLEADO.
    this.cookie.set('editarEmpleado','true')
    this.router.navigate(['dashboard/employees/editemployee',id])
  }
    
  irComponenteAgregarEmpleado() {
    this.cookie.set('editarEmpleado' ,'false')
     this.router.navigate(['dashboard/employees/createemployee']);
  }
  

  getEmpleados(){
    this.apiService.getUsuarios().subscribe((empleados:any) => {
        this.empleados = empleados
    })
  }

}
