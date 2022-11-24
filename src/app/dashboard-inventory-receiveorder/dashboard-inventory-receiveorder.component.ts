import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DetalleOrdenDeCompra } from '../modelos/detalleOrdenCompra';
import { ApiService } from '../servicios/api.service';
import { HistorialInventario } from '../modelos/historialInventario';
import { CookieService } from 'ngx-cookie-service';
import { SharedTitleComponentService } from '../servicios/shared-title-component.service';

@Component({
  selector: 'app-dashboard-inventory-receiveorder',
  templateUrl: './dashboard-inventory-receiveorder.component.html',
  styleUrls: ['./dashboard-inventory-receiveorder.component.css'],
})
export class DashboardInventoryReceiveorderComponent implements OnInit {
  detallesOrdenCompra: DetalleOrdenDeCompra[] = [];
  historialInventario!: HistorialInventario;

  idOrdenCompra!: number;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private cookie: CookieService ,
    private sharedTitleComponente:SharedTitleComponentService
  ) {sharedTitleComponente.emitChange('Recibir artículos')}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.idOrdenCompra = param['id'];
      this.getDetallesOrdenCompra(param['id']);
    });
  }

  getDetallesOrdenCompra(id: number) {
    this.apiService.getDetallesOrdenDeCompra(id).subscribe((data) => {
      this.detallesOrdenCompra = data;
      console.log(this.detallesOrdenCompra);
    });
  }

  recibirTodosLosArticulos() {
    const contenedorDetallesArticulos = document.querySelectorAll(
      '.contenedor-element-table'
    );

    contenedorDetallesArticulos.forEach((contenedor) => {
      let divArticulosOrdenados = contenedor.querySelector(
        '.articulos-ordenados'
      ) as HTMLInputElement;
      let inputArticulosRecibidos = contenedor.querySelector(
        'div input'
      ) as HTMLInputElement;

      inputArticulosRecibidos.value = divArticulosOrdenados.innerText;
    });
  }

  actualizarOrdenComppra(): any {
    const contenedorDetallesArticulos = document.querySelectorAll(
      '.contenedor-element-table'
    );
    let contArticulosOrdenados: number = 0;
    let contArticulosRecibidos: number = 0;
    //VERIFICAR DATOS DE FORM ARTICULOS RECIBIDOS
    contenedorDetallesArticulos.forEach((contenedor) => {
      let divArticulosOrdenados = contenedor.querySelector(
        '.articulos-ordenados'
      ) as HTMLInputElement;

      //CONTEO DE ARTICULOS ORDENADOS
      contArticulosOrdenados += parseInt(divArticulosOrdenados.innerText);

      let inputArticulosRecibidos = contenedor.querySelector(
        'div input'
      ) as HTMLInputElement;

      //CONTEO DE ARTICULOS RECIBIDOS
      contArticulosRecibidos += parseInt(inputArticulosRecibidos.value);
    });

    if (contArticulosRecibidos > contArticulosOrdenados) {
      alert('Error con articulos recibidos, por favor verifique');
      return false;
    }

    contenedorDetallesArticulos.forEach((contenedor) => {
      let divArticulosOrdenados = contenedor.querySelector(
        '.articulos-ordenados'
      ) as HTMLInputElement;

      let inputArticulosRecibidos = contenedor.querySelector(
        'div input'
      ) as HTMLInputElement;

      let id = contenedor.querySelector('div #id') as HTMLInputElement;
      let id_articulo = contenedor.querySelector(
        'div #id_articulo'
      ) as HTMLInputElement;

      let data = { recibido: inputArticulosRecibidos.value, id: id.innerText };

      this.apiService.updateDetalleOrdenDeCompra(data).subscribe();

      //AUMENTAR STOCK EN INVENTARIO
      let dataInventario = {
        id_articulo: id_articulo.innerText,
        stock: inputArticulosRecibidos.value,
      };
      this.apiService.updateInventario(dataInventario).subscribe((stock) => {
      

        //CREAR REGISTRO EN HISTORIAL DE INVENTARIO
          let id_articulo = contenedor.querySelector(
            'div #id_articulo'
          ) as HTMLInputElement;

          this.historialInventario = {
            id_articulo: parseInt(id_articulo.innerText),
            id_empresa: parseInt(this.cookie.get('id_nombre_empresa')),
            id_empleado: parseInt(this.cookie.get('id_empleado')),
            id_motivo: 3,
            referencia_id: this.idOrdenCompra,
            ajuste: parseInt(inputArticulosRecibidos.value),
            stock_final: stock.stock,
          };

          this.apiService
            .addHistorialInventario(this.historialInventario)
            .subscribe();
        
      });
    });

    //VERIFICAR SI TODOS LO ARTICULOS LLEGARON
    let estado = '';
    if (contArticulosOrdenados == contArticulosRecibidos) {
      estado = 'cerrado';
    } else {
      estado = 'recibido parcialmente';
    }

    let data = {
      id: this.idOrdenCompra,
      estado: estado,
      recibido: contArticulosRecibidos,
    };

    this.apiService.updateOrdenDeCompra(data).subscribe(()=>{
      alert("Articulos recibidos")
      this.router.navigate(['dashboard/inventory/orderdetail',this.idOrdenCompra])
    } );
  }

  irDetalleOrdenCompra(){
    this.router.navigate(['dashboard/inventory/orderdetail',this.idOrdenCompra])
  }
}
