import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CategoriaArticulo } from '../modelos/categoriaArticulo';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-dashboard-goods-categoryedit',
  templateUrl: './dashboard-goods-categoryedit.component.html',
  styleUrls: ['./dashboard-goods-categoryedit.component.css']
})
export class DashboardGoodsCategoryeditComponent implements OnInit {
  categoriaArticuloFormRegistro = new FormGroup({
    id:new FormControl(),
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });
  constructor( private apiService: ApiService,
    private router: Router,
    private cookie: CookieService ,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.getCategoriaArticulo(params['id'])
    })
  }

  getCategoriaArticulo(id:number){
    this.apiService.getCategoriaArticulo(id).subscribe((r:CategoriaArticulo) => {
        this.categoriaArticuloFormRegistro.patchValue(r)
    })
  }
  

  updateCategoriaArticulo(){
    
  }

  irComponneteListaCategoriaArticulo(){
    this.router.navigate(['dashboard/goods/categories']);
  }

}
