import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarioForm = new FormGroup({
    correo: new FormControl('') ,
    clave: new FormControl('') ,
    nombre_empresa: new FormControl('') ,
    
    id_nombre_empresa: new FormControl(null) ,
    id_rol: new FormControl(1) ,
    estatus:new FormControl("a")
  });


  constructor() { }

  ngOnInit(): void {
  }

  addUsuario(form: any){
    console.log(form)
    
  

  }

}
