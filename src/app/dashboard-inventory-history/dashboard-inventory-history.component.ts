import { Component, OnInit } from '@angular/core';
import { HistorialInventario } from '../modelos/historialInventario';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-dashboard-inventory-history',
  templateUrl: './dashboard-inventory-history.component.html',
  styleUrls: ['./dashboard-inventory-history.component.css']
})
export class DashboardInventoryHistoryComponent implements OnInit {

  historialInventario:HistorialInventario[] = []

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getHistorialInventario()
  }

  getHistorialInventario(){
    this.apiService.getHistorialInventario().subscribe(historial => {
      this.historialInventario = historial
    })
  }

}
