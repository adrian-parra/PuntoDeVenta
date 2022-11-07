import { Component, OnInit } from '@angular/core';
import { CategoriaArticulo } from '../modelos/categoriaArticulo';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-dashboard-goods-categories',
  templateUrl: './dashboard-goods-categories.component.html',
  styleUrls: ['./dashboard-goods-categories.component.css']
})
export class DashboardGoodsCategoriesComponent implements OnInit {

  categoriaArticulo:CategoriaArticulo [] = []

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {

    this.getCategoriasArticulos()
  }

  getCategoriasArticulos(){
    this.apiService.getCategoriasArticulos().subscribe((categoriaArticulo:any) => {
      this.categoriaArticulo = categoriaArticulo
  })
  }

}
