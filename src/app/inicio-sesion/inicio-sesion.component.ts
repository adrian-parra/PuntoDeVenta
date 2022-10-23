import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Usuario } from '../modelos/usuario';
import { ApiService } from '../servicios/api.service';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  
  
 
  usuarioFormLogin = new FormGroup({
    correo: new FormControl('' ,[Validators.email ,Validators.required]) ,
    clave: new FormControl('' ,[Validators.required ,Validators.minLength(8)])
  });

  constructor(private router:Router ,public apiService:ApiService) { }

  ngOnInit(): void {
  }

  vericarSesion() {
    console.log(this.usuarioFormLogin.value)
    this.apiService.vericarSecionUsuario(this.usuarioFormLogin.value).subscribe((r:any) => {
   
      if(r['0'].errors){
        alert("error ,verifique correo o contraseña")
      }else {
        this.router.navigate(['dashboard/report/sales']);
      }

    })
  
  }

}
