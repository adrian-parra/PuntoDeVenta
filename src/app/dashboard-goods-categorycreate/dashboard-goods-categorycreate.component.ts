import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-goods-categorycreate',
  templateUrl: './dashboard-goods-categorycreate.component.html',
  styleUrls: ['./dashboard-goods-categorycreate.component.css']
})
export class DashboardGoodsCategorycreateComponent implements OnInit {
  
  categoriaArticuloFormRegistro = new FormGroup({
    nombre: new FormControl('' ,[Validators.required ,Validators.minLength(2)]) ,
 });

  constructor() { }

  ngOnInit(): void {
  }
  
  addCategoriaArticulo(){
    
  }
}
