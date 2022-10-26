import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Empleado } from "../modelos/empleado";
import { Usuario } from "../modelos/usuario";

@Injectable({
    providedIn: 'root'
  })
  export class ApiService {

    baseUrl = environment.API;

    constructor(public http:HttpClient ) { }

    getUsuarios():Observable<Empleado> {
      return this.http.get<Empleado>(this.baseUrl+'empleado/')
    }

    addUsuario(obj: any):Observable<any> {
        return this.http.post(this.baseUrl+'usuario/?insertar=1', obj)
      }
      vericarSecionUsuario(obj: any):Observable<Usuario> {
        return this.http.post<Usuario>(this.baseUrl+'usuario/?verificar_sesion',obj)
      }
  }