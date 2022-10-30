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
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
    HttpClientModule 
  ],
  providers: [CookieService ,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
