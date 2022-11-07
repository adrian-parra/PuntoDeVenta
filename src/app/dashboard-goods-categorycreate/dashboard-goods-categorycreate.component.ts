import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-dashboard-goods-categorycreate',
  templateUrl: './dashboard-goods-categorycreate.component.html',
  styleUrls: ['./dashboard-goods-categorycreate.component.css']
})
export class DashboardGoodsCategorycreateComponent implements OnInit {
  
  categoriaArticuloFormRegistro = new FormGroup({
    nombre: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
 });

  constructor(private apiService:ApiService , private router:Router) { }

  ngOnInit(): void {
  }

  irComponneteListaCategoriaArticulo(){
    this.router.navigate(['dashboard/goods/categories'])
  }
  
  addCategoriaArticulo(){
    this.apiService.addCategoriaArticulo(this.categoriaArticuloFormRegistro.value).subscribe((r:any) =>{
      if(r['0'] == true){
        alert("Categoria registrada")
        this.router.navigate(['dashboard/goods/categories'])
      }else {
        alert(r['2'])
      }
    })
  }
}
