import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cliente } from '../modelos/cliente';
import { ApiService } from '../servicios/api.service';
import { SharedTitleComponentService } from '../servicios/shared-title-component.service';

@Component({
  selector: 'app-dashboard-clients-editcustomer',
  templateUrl: './dashboard-clients-editcustomer.component.html',
  styleUrls: ['./dashboard-clients-editcustomer.component.css']
})
export class DashboardClientsEditcustomerComponent implements OnInit {
    idCliente!:number 

  clienteFormRegistro = new FormGroup({
    id:new FormControl(),
    nombre: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    correo: new FormControl('' ,[Validators.email ,Validators.required]) ,
    telefono: new FormControl('' ,[Validators.required ,Validators.minLength(10) ,Validators.maxLength(10) ,Validators.pattern("[0-9]*")]) ,
    direccion: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    ciudad: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    estado: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    nota: new FormControl('') ,
    codigo_postal: new FormControl('' ,[Validators.required ,Validators.minLength(5) ,Validators.maxLength(5) ,Validators.pattern("[0-9]*")]) ,
  });
  constructor(private apiService:ApiService ,
    private router:Router ,private readonly route: ActivatedRoute ,
    private sharedTitleService:SharedTitleComponentService) {
      sharedTitleService.emitChange("Editar cliente")
     }

  ngOnInit(): void {

    this.route.params.subscribe((params:Params) => {
      this.idCliente = params['id']
      this.getCliente(params['id'])
    })
  }

  getCliente(id:number){
    

    this.apiService.getCliente(id).subscribe((cliente:Cliente) => {
        
        
        this.clienteFormRegistro.patchValue(cliente)
        

    
    })
  }

  updateCliente(){
    this.apiService.updateCliente(this.clienteFormRegistro.value).subscribe((r:any) =>{
      if(r['0'] == true){
        alert("Cliente actualizado")
        this.router.navigate(['dashboard/clients/detailcustomer' ,this.clienteFormRegistro.controls.id.value])
      }else {
        alert(r['2'])
      }
    })
  }

  irPerfilCliente(id:number){
    this.router.navigate(['dashboard/clients/detailcustomer' ,id])
  }

}
