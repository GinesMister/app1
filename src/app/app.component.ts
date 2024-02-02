import { Component } from '@angular/core';
import { Vino } from './models/vinoDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrVino: Vino[]
  
  constructor() {
    this.arrVino = []
  }

  insertar(nombre: HTMLInputElement, pvp: HTMLInputElement) {
    const vino: Vino = new Vino(nombre.value, pvp.valueAsNumber)
    this.arrVino.push(vino)
    console.log(this.arrVino)
  }

}