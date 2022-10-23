import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Usuario } from "../modelos/usuario";

@Injectable({
    providedIn: 'root'
  })
  export class ApiService {

    baseUrl = environment.API;

    constructor(public http:HttpClient ) { }

    addUsuario(obj: any):Observable<any> {
        return this.http.post(this.baseUrl+'usuario/?insertar=1', obj)
      }
  }