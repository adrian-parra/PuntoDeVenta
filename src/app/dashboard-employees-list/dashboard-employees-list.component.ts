import { Component, OnInit } from '@angular/core';
import { Empleado } from '../modelos/empleado';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-dashboard-employees-list',
  templateUrl: './dashboard-employees-list.component.html',
  styleUrls: ['./dashboard-employees-list.component.css']
})
export class DashboardEmployeesListComponent implements OnInit {

  empleados:Empleado[] = []

  constructor(public apiService:ApiService) { }

  ngOnInit(): void {
    this.getEmpleados()
  }

  getEmpleados(){
    this.apiService.getUsuarios().subscribe((empleados:any) => {
        this.empleados = empleados
    })
  }

}
