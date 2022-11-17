import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Proveedor } from '../modelos/proveedor';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-dashboard-inventory-supplieredit',
  templateUrl: './dashboard-inventory-supplieredit.component.html',
  styleUrls: ['./dashboard-inventory-supplieredit.component.css']
})
export class DashboardInventorySuppliereditComponent implements OnInit {

  proveedor!:Proveedor

  proveedorFormRegistro = new FormGroup({
    id:new FormControl(),
    nombre: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    correo: new FormControl('' ,[Validators.email ,Validators.required]) ,
    telefono: new FormControl('' ,[Validators.required ,Validators.minLength(10) ,Validators.maxLength(10) ,Validators.pattern("[0-9]*")]) ,
    direccion: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    ciudad: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    estado: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    nota: new FormControl() ,
    codigo_postal: new FormControl('' ,[Validators.required ,Validators.minLength(5) ,Validators.maxLength(5) ,Validators.pattern("[0-9]*")]) ,
    sitio_web:new FormControl()
  });
  constructor(private apiService:ApiService ,
    private router:Router ,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.getProveedor(params['id'])
    })
  }

  irListaProveedores() {
    this.router.navigate(['dashboard/inventory/supplierlist'])
  }
  updateProveedor() {
    this.apiService.updateProveedor(this.proveedorFormRegistro.value).subscribe(option => {
      if(option['0'] == true){
        alert("Proveedor actualizado")
        this.router.navigate(['dashboard/inventory/supplierlist'])
      }else {
        alert(option['2'])
      }
    })
  }

  getProveedor(id:number){
        this.apiService.getProveedor(id).subscribe(proveedor => {
          this.proveedorFormRegistro.patchValue(proveedor)
        })
  }

}
