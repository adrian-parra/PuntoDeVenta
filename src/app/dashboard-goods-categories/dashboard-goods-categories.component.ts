import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaArticulo } from '../modelos/categoriaArticulo';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-dashboard-goods-categories',
  templateUrl: './dashboard-goods-categories.component.html',
  styleUrls: ['./dashboard-goods-categories.component.css']
})
export class DashboardGoodsCategoriesComponent implements OnInit {

  categoriaArticulo:CategoriaArticulo [] = []

  constructor(private apiService:ApiService ,private router:Router) { }

  ngOnInit(): void {

    this.getCategoriasArticulos()
  }

  irComponenteAddCategoria(){
    this.router.navigate(['dashboard/goods/categorycreate'])
  }

  getCategoriasArticulos(){
    this.apiService.getCategoriasArticulos().subscribe((categoriaArticulo:any) => {
      this.categoriaArticulo = categoriaArticulo
  })
  }

  editarCategoria(id:number) {
    this.router.navigate(['dashboard/goods/categoryedit' ,id])
  }

}
