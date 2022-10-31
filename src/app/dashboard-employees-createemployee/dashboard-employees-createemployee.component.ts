import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Empleado } from '../modelos/empleado';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-dashboard-employees-createemployee',
  templateUrl: './dashboard-employees-createemployee.component.html',
  styleUrls: ['./dashboard-employees-createemployee.component.css']
})
export class DashboardEmployeesCreateemployeeComponent implements OnInit {
  
  

  empleadoFormRegistro = new FormGroup({
    id:new FormControl(''),
    id_usuario: new FormControl(null),
    nombre: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
    telefono: new FormControl('' ,[Validators.required ,Validators.minLength(10) ,Validators.maxLength(10) ,Validators.pattern("[0-9]*")]) ,
    estatus:new FormControl('a'),
    id_nombre_empresa: new FormControl(),
    id_rol:new FormControl(),
    correo: new FormControl('' ,[Validators.email ,Validators.required]) ,
    clave: new FormControl('' ,[Validators.minLength(8) ,Validators.required]) ,
    rol: new FormControl('' ,[Validators.required ]) ,
  });
  empleado?: Empleado;
  
  editarEmpleado:boolean = false

  esPropietario:boolean = false

  constructor(private router:Router ,public apiService:ApiService ,private cookie:CookieService ,private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    

    //VERIFICAR SI LA REDIRECCION NOS INDICA QUE EDITEMOS EL EMPLEADO
    if(this.cookie.check("editarEmpleado")){
      if(this.cookie.get('editarEmpleado') == 'true'){
         //OBTENER PARAMETRO
          this.route.params.subscribe((params:Params) => {
            //VERIFICAR PARAMETRO CON EL DE LA COOKIE 
            if(params['id'] == this.cookie.get('id_empleado')){
                //OBTENER EMPLEADO POR EL PARAMETRO
                this.getEmpleado(params['id'])
                this.editarEmpleado = true
            }else{
                alert('ERROR INESPERADO NO JUEGUE CON LA URL')
                this.router.navigate(['dashboard/employees/editemployee/'+this.cookie.get('id_empleado')])
            }

            
          })
      }
     
    }
  }

  
  getEmpleado(id:any){
    this.apiService.getEmpleado(id).subscribe((empleado:Empleado) => {
      this.empleado = empleado
      
      

      this.empleadoFormRegistro.controls.nombre.setValue(this.empleado.nombre)
      this.empleadoFormRegistro.controls.correo.setValue(this.empleado.correo)
      this.empleadoFormRegistro.controls.rol.setValue(this.empleado.rol)
      this.empleadoFormRegistro.controls.telefono.setValue(this.empleado.telefono)
    
      //DESHABILITAR CLAVE POR SGURIDA
      this.empleadoFormRegistro.controls.clave.disable()
      
      //VERIFICAR SI EL ROL ES PROPIETARIO
      if(  this.empleado.rol == "Propietario"){
        this.esPropietario = true
      }
    
    
  })
}
  updateEmpleado(){
    
    let rol:any = this.empleadoFormRegistro.controls.rol.value
    let id_rol = this.empleadoFormRegistro.controls.id_rol
    id_rol.setValue(this.obtenerIdRol(rol))

    this.empleadoFormRegistro.controls.id.setValue(this.cookie.get('id_empleado'))

    this.apiService.updateEmpleado(this.empleadoFormRegistro.value).subscribe((r:any) =>{
      if(r['0'] == true){
        alert("Empleado actualizado")
        this.router.navigate(['dashboard/employees/list'])
      }else {
        alert(r['2'])
      }
    })
  }

  obtenerIdRol(rol:string):number{
    let id_rol:number = 1 //ROL PROPIETARIO
    if(rol == "Administrador"){
      id_rol = 4
    }else if(rol == "Gerente"){
      id_rol = 3
    }else if(rol == "Cajero"){
      id_rol = 2
    }

    return id_rol

  }

  agregarEmpleado() {

    let rol:any = this.empleadoFormRegistro.controls.rol.value
    let id_rol = this.empleadoFormRegistro.controls.id_rol

    this.empleadoFormRegistro.controls.id_nombre_empresa.setValue(this.cookie.get('id_nombre_empresa'))
      id_rol.setValue(this.obtenerIdRol(rol))
  

    this.apiService.addEmpleado(this.empleadoFormRegistro.value).subscribe((r:any) =>{
      if(r['0'] == true){
        alert("Cuenta creada")
        this.router.navigate(['dashboard/employees/list'])
      }else {
        alert(r['2'])
      }
    })
  

  }

  irComponenteListaEmpleados(){
    this.router.navigate(['dashboard/employees/list'])
  }

}
