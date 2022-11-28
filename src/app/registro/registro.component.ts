import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarioForm = new FormGroup({
    correo: new FormControl('' ,[Validators.email ,Validators.required]) ,
    clave: new FormControl('' ,[Validators.required ,Validators.minLength(8)]) ,
    nombre_empresa: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    
    id_nombre_empresa: new FormControl(null) ,
    id_rol: new FormControl(1) ,
    estatus:new FormControl("a")
  });


  constructor(public apiService:ApiService ,private router:Router) { }

  ngOnInit(): void {
  }

  addUsuario(){
  
    this.apiService.addUsuario(this.usuarioForm.value).subscribe((r:any) => {
      if(r['0'] == true){
        this.usuarioForm.reset()
        alert("Cuenta creada")
        
        this.router.navigate(['login'])
      }else {
        alert(r['2'])
      }


    })
    
  

  }

}
