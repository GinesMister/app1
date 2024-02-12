import { Component, Input } from '@angular/core';
import { VinoService } from '../../Services/vino.service';

@Component({
  selector: 'app-listado',
  templateUrl: './app-listado.component.html',
  styleUrls: ['./app-listado.component.css']
})
export class AppListadoComponent {
  constructor (public sv:VinoService) { }
}
