import { Component, Input } from '@angular/core';
import { Vino } from '../../Models/vinoDTO';
import { VinoService } from '../../Services/vino.service';

@Component({
  selector: 'app-listado',
  templateUrl: './app-listado.component.html',
  styleUrls: ['./app-listado.component.css']
})
export class AppListadoComponent {
  constructor (public sv:VinoService) { }
}
