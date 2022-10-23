import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../modelos/usuario";

@Injectable({
    providedIn: 'root'
  })

  export class ApiService {
    baseUrl = "http://localhost/api_punto_venta/"

    constructor(public http:HttpClient ) { }


    
    addUsuario(obj: any) {
        return this.http.post<Usuario>(this.baseUrl, obj)
      }

  }