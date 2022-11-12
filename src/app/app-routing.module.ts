import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardClientsCreatecustomerComponent } from './dashboard-clients-createcustomer/dashboard-clients-createcustomer.component';
import { DashboardClientsDatabaseComponent } from './dashboard-clients-database/dashboard-clients-database.component';
import { DashboardClientsDetailcustomerComponent } from './dashboard-clients-detailcustomer/dashboard-clients-detailcustomer.component';
import { DashboardClientsEditcustomerComponent } from './dashboard-clients-editcustomer/dashboard-clients-editcustomer.component';
import { DashboardEmployeesCreateemployeeComponent } from './dashboard-employees-createemployee/dashboard-employees-createemployee.component';
import { DashboardEmployeesEditemployeeComponent } from './dashboard-employees-editemployee/dashboard-employees-editemployee.component';
import { DashboardEmployeesListComponent } from './dashboard-employees-list/dashboard-employees-list.component';
import { DashboardGoodsCategoriesComponent } from './dashboard-goods-categories/dashboard-goods-categories.component';
import { DashboardGoodsCategorycreateComponent } from './dashboard-goods-categorycreate/dashboard-goods-categorycreate.component';
import { DashboardGoodsCategoryeditComponent } from './dashboard-goods-categoryedit/dashboard-goods-categoryedit.component';
import { DashboardGoodsNewComponent } from './dashboard-goods-new/dashboard-goods-new.component';
import { DashboardGoodsPriceComponent } from './dashboard-goods-price/dashboard-goods-price.component';
import { DashboardInventoryAdjustmentComponent } from './dashboard-inventory-adjustment/dashboard-inventory-adjustment.component';
import { DashboardInventoryHistoryComponent } from './dashboard-inventory-history/dashboard-inventory-history.component';
import { DashboardInventoryPurchaseComponent } from './dashboard-inventory-purchase/dashboard-inventory-purchase.component';
import { DashboardInventorySupplierlistComponent } from './dashboard-inventory-supplierlist/dashboard-inventory-supplierlist.component';
import { DashboardReportSalesComponent } from './dashboard-report-sales/dashboard-report-sales.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginGuard } from './servicios/login-guard.service';

const routes: Routes = [
  {path:'' ,redirectTo:'/dashboard' ,pathMatch:'full'},
  { path:'login' ,component:InicioSesionComponent},
  {path:'signup' ,component:RegistroComponent},
  {path:'dashboard' ,component:DashboardComponent ,canActivate:[LoginGuard],
    children:[
      {path:'report/sales' ,component:DashboardReportSalesComponent},

      {path:'goods/price' ,component:DashboardGoodsPriceComponent},
      {path:'goods/categories' ,component:DashboardGoodsCategoriesComponent},
      {path:'goods/categorycreate' ,component:DashboardGoodsCategorycreateComponent},
      {path:'goods/categoryedit/:id' ,component:DashboardGoodsCategoryeditComponent},
      {path:'goods/new' ,component:DashboardGoodsNewComponent},
  


      {path:'inventory/purchase' ,component:DashboardInventoryPurchaseComponent},
      {path:'inventory/adjustment' ,component:DashboardInventoryAdjustmentComponent},
      {path:'inventory/supplierlist' ,component:DashboardInventorySupplierlistComponent},
      {path:'inventory/history' ,component:DashboardInventoryHistoryComponent},

      {path:'employees/list' ,component:DashboardEmployeesListComponent},
      {path:'employees/createemployee' ,component:DashboardEmployeesCreateemployeeComponent},
      {path:'employees/editemployee/:id' ,component:DashboardEmployeesCreateemployeeComponent},

      {path:'clients/database' ,component:DashboardClientsDatabaseComponent} ,
      {path:'clients/createcustomer' ,component:DashboardClientsCreatecustomerComponent} ,
      {path:'clients/detailcustomer/:id' ,component:DashboardClientsDetailcustomerComponent} ,
      {path:'clients/editcustomer/:id' ,component:DashboardClientsEditcustomerComponent} 


    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
