import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../servicios/api.service';
import { SharedTitleComponentService } from '../servicios/shared-title-component.service';

@Component({
  selector: 'app-dashboard-inventory-suppliercreate',
  templateUrl: './dashboard-inventory-suppliercreate.component.html',
  styleUrls: ['./dashboard-inventory-suppliercreate.component.css']
})
export class DashboardInventorySuppliercreateComponent implements OnInit {
  
  

 
  constructor(private apiService:ApiService ,private router:Router ,private cookie:CookieService ,
    private sharedTitleComponente:SharedTitleComponentService) {
      this.sharedTitleComponente.emitChange('Crear proveedor');
     }

    ngOnInit(): void {
  
      
  
    }


    proveedorFormRegistro = new FormGroup({
      nombre: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
      correo: new FormControl('' ,[Validators.email ,Validators.required]) ,
      telefono: new FormControl('' ,[Validators.required ,Validators.minLength(10) ,Validators.maxLength(10) ,Validators.pattern("[0-9]*")]) ,
      id_empresa: new FormControl(this.cookie.get('id_nombre_empresa')),
      direccion: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
      ciudad: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
      estado: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
      nota: new FormControl(null) ,
      codigo_postal: new FormControl('' ,[Validators.required ,Validators.minLength(5) ,Validators.maxLength(5) ,Validators.pattern("[0-9]*")]) ,
      sitio_web:new FormControl()
    });

  
  addProveedor(){

    
    
    this.apiService.addProveedor(this.proveedorFormRegistro.value).subscribe((option:any) => {
      if(option['0'] == true){
        alert("Proveedor registrado")
        this.router.navigate(['dashboard/inventory/supplierlist'])
      }else {
        alert(option['2'])
      }
    })

  }

  irListaProveedores(){
    this.router.navigate(['dashboard/inventory/supplierlist'])
  }
}
