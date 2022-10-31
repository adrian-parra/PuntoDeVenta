import { Component, OnInit } from '@angular/core';
import { SharedTitleComponentService } from '../servicios/shared-title-component.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tituloComponente!:string

  constructor(private sharedTitleService:SharedTitleComponentService) {
    sharedTitleService.changeEmitted$.subscribe(tituloComponente => {
      this.tituloComponente = tituloComponente
  });
   }

  ngOnInit(): void {
  }

}
