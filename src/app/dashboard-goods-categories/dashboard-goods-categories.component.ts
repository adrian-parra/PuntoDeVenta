import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaArticulo } from '../modelos/categoriaArticulo';
import { ApiService } from '../servicios/api.service';
import { SharedTitleComponentService } from '../servicios/shared-title-component.service';

@Component({
  selector: 'app-dashboard-goods-categories',
  templateUrl: './dashboard-goods-categories.component.html',
  styleUrls: ['./dashboard-goods-categories.component.css']
})
export class DashboardGoodsCategoriesComponent implements OnInit {

  categoriaArticulo:CategoriaArticulo [] = []

  constructor(private apiService:ApiService ,private router:Router ,
    private sharedTitleService:SharedTitleComponentService) {
      sharedTitleService.emitChange('Categorías')
     }

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
