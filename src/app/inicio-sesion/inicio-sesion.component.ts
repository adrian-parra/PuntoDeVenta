import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
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

  constructor(private router:Router ,public apiService:ApiService ,private cookie:CookieService) { }

  ngOnInit(): void {
  }


  vericarSesion() {
  
    this.apiService.vericarSecionUsuario(this.usuarioFormLogin.value).subscribe((r:any) => {
   
      if(r.errors){
        alert("error ,verifique correo o contraseña")
      }else {
        //CREAR COOKIE ENCARGADA DE MANEJAR LA SESION ACTIVA DEL USUARIO
        this.cookie.set('login','true')

        //DATOS IMPORTANTES QUE SE TIENEN QUE GUARDAR EN COOKIES
        this.cookie.set('correo',r.correo)
        this.cookie.set('id',r.id)
        this.cookie.set('id_nombre_empresa',r.id_nombre_empresa)
        this.cookie.set('id_rol',r.id_rol)
        this.cookie.set('nombre_empresa',r.nombre_empresa)
        this.cookie.set('nombre_rol',r.nombre_rol)
        this.cookie.set('id_empleado',r.id_empleado)
        this.cookie.set('nombre_empleado',r.nombre)

        
        this.router.navigate(['dashboard/report/sales']);
      }

    })
  
  }

}
