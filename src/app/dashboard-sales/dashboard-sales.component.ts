import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { toArray } from 'rxjs';
import { Articulo } from '../modelos/articulo';
import { DetalleVenta } from '../modelos/detalleVenta';
import { HistorialInventario } from '../modelos/historialInventario';
import { Venta } from '../modelos/venta';
import { ApiService } from '../servicios/api.service';
import { SharedTitleComponentService } from '../servicios/shared-title-component.service';

@Component({
  selector: 'app-dashboard-sales',
  templateUrl: './dashboard-sales.component.html',
  styleUrls: ['./dashboard-sales.component.css'],
})
export class DashboardSalesComponent implements OnInit {
  articulos: Articulo[] = [];

  detallesVenta: DetalleVenta[] = [];

  venta!: Venta;

  totalAcumuladoEnArticulo: number = 0;

  cantidadArticulosTicket: number = 0;

  historialInventario!: HistorialInventario;

  pagoFormRegistro = new FormGroup({
    efectivo_recibido: new FormControl(0, [
      Validators.required,
      Validators.min(0),
    ]),
    tipo_pago: new FormControl('1'),
  });
  constructor(
    private apiService: ApiService,
    private cookie: CookieService,
    private roter: Router ,
    private sharedTitleComponente:SharedTitleComponentService
  ) {sharedTitleComponente.emitChange('Realizar venta')}

  ngOnInit(): void {
    this.getArticulos();
  }

  getArticulos() {
    this.apiService.getArticulos().subscribe((data: any) => {
      this.articulos = data;
    });
  }

  sumarPrecioTotalDeArticulos() {
    this.totalAcumuladoEnArticulo = 0;
    for (let detalleVenta of this.detallesVenta) {
      this.totalAcumuladoEnArticulo += Number(detalleVenta.total);
    }
  }

  cerrarOrAbrirCardviewTicket(): any {
    //verificar que alla articulos en ticjket
    if (this.cantidadArticulosTicket <= 0) {
      alert('Agregue por lo menos un articulo al ticket.');
      return false;
    }

    //SUMATORIA  DE PRECIO TOTAL DE CADA ARTICULO

    this.sumarPrecioTotalDeArticulos();
    this.sumarCantidadTotalDeArticulos();

    document
      .querySelector('.cardvie-flotante')
      ?.classList.toggle('cerrar-cardview-flotante');
  }

  abrirOCerrarCardviewPago() {
    this.pagoFormRegistro.controls.efectivo_recibido.setValue(
      Number(this.totalAcumuladoEnArticulo)
    );
    document
      .querySelector('.cardview-pago')
      ?.classList.toggle('hide-and-show-pago');
    document
      .querySelector('.cardview-ticket')
      ?.classList.toggle('hide-and-show-ticket');
  }

  agregarATicket(articulo: Articulo): any {
    //VERIFICAR QUE ARTICULO TENGA STOCK EN INVENTARIO
    if (articulo.stock <= 0) {
      alert('Stock insuficiente.');
      return false;
    }
    //VERIFICAR SI ARTICULO YA FUE AGREGADO AL TICKET

    if (this.detallesVenta.length > 0) {
      for (let detalleVenta of this.detallesVenta) {
        if (detalleVenta.id_articulo == articulo.id) {
          let cantidad = detalleVenta.cantidad;

          cantidad++;

          if (articulo.stock < cantidad) {
            alert('Stock insuficiente.');
            return false;
          }

          let total: number = detalleVenta.costo * cantidad;

          this.cantidadArticulosTicket++;

          detalleVenta.cantidad = cantidad;
          detalleVenta.total = total;

          return false;
        }
      }
    }

    //MODELO PARA DETALE VENTA A PARTIR DE ARTICULO
    let modelDetalleVentaTemp = {
      id_articulo: articulo.id,
      cantidad: 1,
      costo: articulo.precio,
      total: articulo.precio,
      nombre_articulo: articulo.nombre,
      stock_articulo: articulo.stock,
    };

    this.cantidadArticulosTicket++;

    this.detallesVenta.push(modelDetalleVentaTemp);
  }

  masCantidadArticulo($event: any, detalleVenta: DetalleVenta): any {
    let inputCantidad = $event.target as HTMLInputElement;

    if (parseInt(inputCantidad.value) <= 0) {
      alert('Cantidad en articulo no puede ser 0.');
      inputCantidad.value = '1';
      return false;
    }

    if (parseInt(inputCantidad.value) > Number(detalleVenta.stock_articulo)) {
      alert('stock insuficiente');
      inputCantidad.value = String(detalleVenta.stock_articulo?.toString());
      detalleVenta.cantidad = Number(detalleVenta.stock_articulo);

      detalleVenta.total = detalleVenta.cantidad * detalleVenta.costo;
      this.sumarPrecioTotalDeArticulos();
      this.sumarCantidadTotalDeArticulos();
      return false;
    }

    detalleVenta.cantidad = parseInt(inputCantidad.value);

    detalleVenta.total = detalleVenta.cantidad * detalleVenta.costo;

    this.sumarPrecioTotalDeArticulos();
    this.sumarCantidadTotalDeArticulos();
  }

  sumarCantidadTotalDeArticulos() {
    this.cantidadArticulosTicket = 0;

    for (let detalleVenta of this.detallesVenta) {
      this.cantidadArticulosTicket += Number(detalleVenta.cantidad);
    }
  }

  eliminarArticuloDeTicket(id: number) {
    const detlleVentaTemp = this.detallesVenta.filter(
      (item) => item.id_articulo !== id
    );
    this.detallesVenta = [...detlleVentaTemp];

    this.sumarPrecioTotalDeArticulos();

    if (this.detallesVenta.length == 0) this.cerrarOrAbrirCardviewTicket();
  }

  addRrgistroVenta(): any {
    if (
      Number(this.pagoFormRegistro.controls.efectivo_recibido.value) <
      this.totalAcumuladoEnArticulo
    ) {
      alert('Efectivo recibido no es valido.');
      return false;
    }

    let cambio =
      Number(this.pagoFormRegistro.controls.efectivo_recibido.value) -
      this.totalAcumuladoEnArticulo;

    this.venta = {
      id_empresa: Number(this.cookie.get('id_nombre_empresa')),
      id_empleado: Number(this.cookie.get('id_empleado')),
      id_cliente: null,
      tipo_venta: 'venta',
      id_tipo_pago: Number(this.pagoFormRegistro.controls.tipo_pago.value),
      cambio: cambio,
      total: this.totalAcumuladoEnArticulo,
    };

    //REGISTRAR VENTA
    this.apiService.addVenta(this.venta).subscribe((options) => {
      console.log(options);

      if (options['0'] == true) {
        let idVenta = options['id'];

        //LOGICA PARA REGISTRAR DETALLES DE VENTA
        for (let detalleVenta of this.detallesVenta) {
          detalleVenta.id_venta = idVenta;
          this.apiService.addDetalleVenta(detalleVenta).subscribe();

          let objUpdateStock = {
            id_articulo: detalleVenta.id_articulo,
            cantidad: detalleVenta.cantidad,
          };

          this.apiService
            .updateStockArticuloInventario(objUpdateStock)
            .subscribe();


          this.historialInventario = {
            id_articulo: detalleVenta.id_articulo,
            id_empresa: Number(this.cookie.get('id_nombre_empresa')),
            id_empleado: Number(this.cookie.get('id_empleado')),
            id_motivo: 1,
            referencia_id: idVenta,
            ajuste:(detalleVenta.cantidad - detalleVenta.cantidad) - detalleVenta.cantidad ,
            stock_final:Number(detalleVenta.stock_articulo) - detalleVenta.cantidad
          };
          
          //SE CREA REGISTRO EN HISTOERIAL DE INVENTARIO
          this.apiService.addHistorialInventario(this.historialInventario).subscribe()
        }

        alert('venta realizada');

        this.abrirOCerrarCardviewPago();
        this.cerrarOrAbrirCardviewTicket();

        for (let i = 1; i <= this.detallesVenta.length; i++) {
          this.detallesVenta.pop();
        }

        this.cantidadArticulosTicket = 0;
      } else {
        alert(options['2']);
      }
    });
  }
}
