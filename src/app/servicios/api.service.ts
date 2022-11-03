import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../modelos/cliente';
import { Empleado } from '../modelos/empleado';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = environment.API;

  constructor(public http: HttpClient) {}

  /*METODOS PARA TRABAJAR CON TABLE 'USUARIO'*/
  getUsuarios(): Observable<Empleado> { //TABLE EMPLEADO
    return this.http.get<Empleado>(this.baseUrl + 'empleado/');
  }

  addUsuario(obj: any): Observable<any> {
    return this.http.post(this.baseUrl + 'usuario/?insertar=1', obj);
  }
  vericarSecionUsuario(obj: any): Observable<Usuario> {
    return this.http.post<Usuario>(
      this.baseUrl + 'usuario/?verificar_sesion',
      obj
    );
  }
  /*FIN METODOS PARA TRABAJAR CON TABLE 'USUARIO'*/

  //************************************************

  /*METODOS PARA TRABJAR CON TABLE 'EMPLEADO'*/
  addEmpleado(obj:any): Observable<any> {
    return this.http.post<Empleado>(
     this.baseUrl + 'empleado/?insertar=1',
     obj 
    )
  }
  getEmpleado(id:any): Observable<Empleado> {
    return this.http.get<Empleado>(this.baseUrl + 'empleado/?id='+id)
  }

  updateEmpleado(obj:any):Observable<any> {
    return this.http.post<Empleado>(
      this.baseUrl + 'empleado/?actualizar=1',
      obj
    )
  }
  /*FIN METODOS PARA TRABJAR CON TABLE 'EMPLEADO'*/

  //************************************************

  /*METODOS PARA TRABAJAR CON TABLE 'CLIENTE'*/
  getClientes(): Observable<Cliente> { //TABLE EMPLEADO
    return this.http.get<Cliente>(this.baseUrl + 'cliente/');
  }
  /*METODOS PARA TRABAJAR CON TABLE 'CLIENTE'*/

  //************************************************

}
