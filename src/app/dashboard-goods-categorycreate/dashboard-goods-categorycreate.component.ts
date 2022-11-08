import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-dashboard-goods-categorycreate',
  templateUrl: './dashboard-goods-categorycreate.component.html',
  styleUrls: ['./dashboard-goods-categorycreate.component.css'],
})
export class DashboardGoodsCategorycreateComponent implements OnInit {
  categoriaArticuloFormRegistro = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  constructor(
    private apiService: ApiService,
    private router: Router,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    //this.cookie.delete('login'); // delete Test cookie from the browser
    //this.cookie.deleteAll(); //Deletes all cookies that can currently be accessed
    //const allCookies: {} = this.cookie.getAll(); // get all cookies
    // console.log(allCookies)
    //console.log(isLogin)
  }

  irComponneteListaCategoriaArticulo() {
    this.router.navigate(['dashboard/goods/categories']);
  }

  addCategoriaArticulo() {
    this.apiService
      .addCategoriaArticulo(this.categoriaArticuloFormRegistro.value)
      .subscribe((r: any) => {
        if (r['0'] == true) {
          alert('Categoria registrada');
          this.router.navigate(['dashboard/goods/categories']);
        } else {
          alert(r['2']);
        }
      });
  }
}
