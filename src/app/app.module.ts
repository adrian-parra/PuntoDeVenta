import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardReportSalesComponent } from './dashboard-report-sales/dashboard-report-sales.component';
import { DashboardGoodsPriceComponent } from './dashboard-goods-price/dashboard-goods-price.component';
import { DashboardGoodsCategoriesComponent } from './dashboard-goods-categories/dashboard-goods-categories.component';
import { DashboardInventoryPurchaseComponent } from './dashboard-inventory-purchase/dashboard-inventory-purchase.component';
import { DashboardInventoryAdjustmentComponent } from './dashboard-inventory-adjustment/dashboard-inventory-adjustment.component';
import { DashboardInventorySupplierlistComponent } from './dashboard-inventory-supplierlist/dashboard-inventory-supplierlist.component';
import { DashboardInventoryHistoryComponent } from './dashboard-inventory-history/dashboard-inventory-history.component';
import { DashboardEmployeesListComponent } from './dashboard-employees-list/dashboard-employees-list.component';
import { DashboardClientsDatabaseComponent } from './dashboard-clients-database/dashboard-clients-database.component';

import {ReactiveFormsModule ,FormsModule} from '@angular/forms'

//SERVICE PARA TRABAJAR CON COOKIE
import {CookieService} from 'ngx-cookie-service';

//peticiones http
//agregar HttpClientModule a  imports
import {HttpClientModule} from '@angular/common/http';
import { DashboardEmployeesCreateemployeeComponent } from './dashboard-employees-createemployee/dashboard-employees-createemployee.component'
import { LoginGuard } from './servicios/login-guard.service';
import { DashboardEmployeesEditemployeeComponent } from './dashboard-employees-editemployee/dashboard-employees-editemployee.component';
import { SharedTitleComponentService } from './servicios/shared-title-component.service';
import { DashboardClientsCreatecustomerComponent } from './dashboard-clients-createcustomer/dashboard-clients-createcustomer.component';
import { DashboardClientsDetailcustomerComponent } from './dashboard-clients-detailcustomer/dashboard-clients-detailcustomer.component';
import { DashboardClientsEditcustomerComponent } from './dashboard-clients-editcustomer/dashboard-clients-editcustomer.component';
import { DashboardGoodsCategorycreateComponent } from './dashboard-goods-categorycreate/dashboard-goods-categorycreate.component';
import { DashboardGoodsCategoryeditComponent } from './dashboard-goods-categoryedit/dashboard-goods-categoryedit.component';
import { DashboardGoodsNewComponent } from './dashboard-goods-new/dashboard-goods-new.component';
import { DashboardGoodsEditComponent } from './dashboard-goods-edit/dashboard-goods-edit.component';
import { DashboardInventorySuppliercreateComponent } from './dashboard-inventory-suppliercreate/dashboard-inventory-suppliercreate.component';
import { DashboardInventorySuppliereditComponent } from './dashboard-inventory-supplieredit/dashboard-inventory-supplieredit.component';
import { DashboardInventoryCreateorderComponent } from './dashboard-inventory-createorder/dashboard-inventory-createorder.component';
import { DashboardInventoryOrderdetailComponent } from './dashboard-inventory-orderdetail/dashboard-inventory-orderdetail.component';
import { DashboardInventoryReceiveorderComponent } from './dashboard-inventory-receiveorder/dashboard-inventory-receiveorder.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    InicioSesionComponent,
    DashboardComponent,
    DashboardReportSalesComponent,
    DashboardGoodsPriceComponent,
    DashboardGoodsCategoriesComponent,
    DashboardInventoryPurchaseComponent,
    DashboardInventoryAdjustmentComponent,
    DashboardInventorySupplierlistComponent,
    DashboardInventoryHistoryComponent,
    DashboardEmployeesListComponent,
    DashboardClientsDatabaseComponent,
    DashboardEmployeesCreateemployeeComponent,
    DashboardEmployeesEditemployeeComponent,
    DashboardClientsCreatecustomerComponent,
    DashboardClientsDetailcustomerComponent,
    DashboardClientsEditcustomerComponent,
    DashboardGoodsCategorycreateComponent,
    DashboardGoodsCategoryeditComponent,
    DashboardGoodsNewComponent,
    DashboardGoodsEditComponent,
    DashboardInventorySuppliercreateComponent,
    DashboardInventorySuppliereditComponent,
    DashboardInventoryCreateorderComponent,
    DashboardInventoryOrderdetailComponent,
    DashboardInventoryReceiveorderComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
    HttpClientModule 
  ],
  providers: [CookieService ,LoginGuard ,SharedTitleComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
