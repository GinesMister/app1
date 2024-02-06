import { Component } from '@angular/core';
import { Vino } from '../../Models/vinoDTO';
import { VinoService } from '../../Services/vino.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor (public sv:VinoService) { }
}