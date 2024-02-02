import { Component, Input } from '@angular/core';
import { Vino } from '../../models/vinoDTO';

@Component({
  selector: 'app-app-listado',
  templateUrl: './app-listado.component.html',
  styleUrls: ['./app-listado.component.css']
})
export class AppListadoComponent {
  @Input()
  arrVino!: Vino[]
}
