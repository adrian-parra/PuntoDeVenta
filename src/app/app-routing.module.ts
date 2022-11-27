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
import { DashboardGoodsEditComponent } from './dashboard-goods-edit/dashboard-goods-edit.component';
import { DashboardGoodsNewComponent } from './dashboard-goods-new/dashboard-goods-new.component';
import { DashboardGoodsPriceComponent } from './dashboard-goods-price/dashboard-goods-price.component';
import { DashboardInventoryAdjustmentComponent } from './dashboard-inventory-adjustment/dashboard-inventory-adjustment.component';
import { DashboardInventoryCreateorderComponent } from './dashboard-inventory-createorder/dashboard-inventory-createorder.component';
import { DashboardInventoryHistoryComponent } from './dashboard-inventory-history/dashboard-inventory-history.component';
import { DashboardInventoryOrderdetailComponent } from './dashboard-inventory-orderdetail/dashboard-inventory-orderdetail.component';
import { DashboardInventoryPurchaseComponent } from './dashboard-inventory-purchase/dashboard-inventory-purchase.component';
import { DashboardInventoryReceiveorderComponent } from './dashboard-inventory-receiveorder/dashboard-inventory-receiveorder.component';
import { DashboardInventorySuppliercreateComponent } from './dashboard-inventory-suppliercreate/dashboard-inventory-suppliercreate.component';
import { DashboardInventorySuppliereditComponent } from './dashboard-inventory-supplieredit/dashboard-inventory-supplieredit.component';
import { DashboardInventorySupplierlistComponent } from './dashboard-inventory-supplierlist/dashboard-inventory-supplierlist.component';
import { DashboardReportAverageComponent } from './dashboard-report-average/dashboard-report-average.component';
import { DashboardReportSalesComponent } from './dashboard-report-sales/dashboard-report-sales.component';
import { DashboardSalesComponent } from './dashboard-sales/dashboard-sales.component';
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
      {path:'report/average' ,component:DashboardReportAverageComponent},


      {path:'goods/price' ,component:DashboardGoodsPriceComponent},
      {path:'goods/categories' ,component:DashboardGoodsCategoriesComponent},
      {path:'goods/categorycreate' ,component:DashboardGoodsCategorycreateComponent},
      {path:'goods/categoryedit/:id' ,component:DashboardGoodsCategoryeditComponent},
      {path:'goods/new' ,component:DashboardGoodsNewComponent},
      {path:'goods/edit/:id' ,component:DashboardGoodsEditComponent},

      {path:'inventory/purchase' ,component:DashboardInventoryPurchaseComponent},
      {path:'inventory/suppliercreate' ,component:DashboardInventorySuppliercreateComponent},
      {path:'inventory/supplieredit/:id' ,component:DashboardInventorySuppliereditComponent},
      {path:'inventory/adjustment' ,component:DashboardInventoryAdjustmentComponent},
      {path:'inventory/supplierlist' ,component:DashboardInventorySupplierlistComponent},
      {path:'inventory/history' ,component:DashboardInventoryHistoryComponent},
      {path:'inventory/createorder' ,component:DashboardInventoryCreateorderComponent},
      {path:'inventory/orderdetail/:id' ,component:DashboardInventoryOrderdetailComponent},
      {path:'inventory/receiveorder/:id' ,component:DashboardInventoryReceiveorderComponent},

      {path:'sales' ,component:DashboardSalesComponent},





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
