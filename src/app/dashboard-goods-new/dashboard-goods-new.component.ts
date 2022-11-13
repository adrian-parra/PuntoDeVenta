import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-goods-new',
  templateUrl: './dashboard-goods-new.component.html',
  styleUrls: ['./dashboard-goods-new.component.css']
})
export class DashboardGoodsNewComponent implements OnInit {

  articuloFormRegistro = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });


  constructor() { }

  ngOnInit(): void {
  }

  addArticulo(){
    
  }

}
