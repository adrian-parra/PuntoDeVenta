import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DetalleVenta } from '../modelos/detalleVenta';
import { Recibo } from '../modelos/reciboDeVenta';
import { ApiService } from '../servicios/api.service';
import { SharedTitleComponentService } from '../servicios/shared-title-component.service';

@Component({
  selector: 'app-dashboard-report-average',
  templateUrl: './dashboard-report-average.component.html',
  styleUrls: ['./dashboard-report-average.component.css']
})
export class DashboardReportAverageComponent implements OnInit {

  ventasDisponibles:boolean = false
  recibosVenta:Recibo[]=[]

  detallesVenta:DetalleVenta[] =[]

  reciboVenta!:any

  constructor(private apiService:ApiService, private route:ActivatedRoute ,
    private sharedTitleComponente:SharedTitleComponentService) {
      sharedTitleComponente.emitChange('Recibos')
     }

  ngOnInit(): void {
    this.route.queryParams.subscribe((param:Params) => {
        this.getRecibosVenta(param['id'],param['colaborador'])
    })

  }

  getRecibosVenta(id:any ,colaborador:any){
    this.apiService.getRecibosVenta(id ,colaborador).subscribe(recibos => {
      this.recibosVenta = recibos

      if(this.recibosVenta.length > 0)this.ventasDisponibles = true

      console.log(this.recibosVenta)
    })
  }

  llenarTicket(recibo:any){
   
    
    this.apiService.getDetallesVenta(recibo.id).subscribe(detallesVenta => {
      this.detallesVenta = detallesVenta
      
      this.reciboVenta = recibo


      console.log(this.detallesVenta)
    })

  }

  cerrarTicket(){
    this.reciboVenta = null
  }

  obtenerEfectivo(reciboVenta:any):any{
    return Number(reciboVenta.total) + Number(reciboVenta.cambio)
  }

  

}
