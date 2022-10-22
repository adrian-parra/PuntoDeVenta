import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGoodsCategoriesComponent } from './dashboard-goods-categories/dashboard-goods-categories.component';
import { DashboardGoodsPriceComponent } from './dashboard-goods-price/dashboard-goods-price.component';
import { DashboardReportSalesComponent } from './dashboard-report-sales/dashboard-report-sales.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:'' ,redirectTo:'/dashboard' ,pathMatch:'full'},
  { path:'login' ,component:InicioSesionComponent},
  {path:'signup' ,component:RegistroComponent},
  {path:'dashboard' ,component:DashboardComponent ,
    children:[
      {path:'report/sales' ,component:DashboardReportSalesComponent},
      {path:'goods/price' ,component:DashboardGoodsPriceComponent},
      {path:'goods/categories' ,component:DashboardGoodsCategoriesComponent}
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
