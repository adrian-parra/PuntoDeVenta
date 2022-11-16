import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-dashboard-inventory-suppliercreate',
  templateUrl: './dashboard-inventory-suppliercreate.component.html',
  styleUrls: ['./dashboard-inventory-suppliercreate.component.css']
})
export class DashboardInventorySuppliercreateComponent implements OnInit {
  
  proveedorFormRegistro = new FormGroup({
    nombre: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    correo: new FormControl('' ,[Validators.email ,Validators.required]) ,
    telefono: new FormControl('' ,[Validators.required ,Validators.minLength(10) ,Validators.maxLength(10) ,Validators.pattern("[0-9]*")]) ,
    id_empresa: new FormControl(),
    direccion: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    ciudad: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    estado: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    nota: new FormControl(null) ,
    codigo_postal: new FormControl('' ,[Validators.required ,Validators.minLength(5) ,Validators.maxLength(5) ,Validators.pattern("[0-9]*")]) ,
    pagina_web:new FormControl()
  });
  constructor(private apiService:ApiService ,private router:Router) { }

  ngOnInit(): void {
  }
  addProveedor(){

  }

  irListaProveedores(){
    this.router.navigate(['dashboard/inventory/supplierlist'])
  }
}
