import { Injectable } from '@angular/core';
import { Vino } from '../Models/vinoDTO';

@Injectable({
  providedIn: 'root'
})
export class VinoService {

  arrVino: Vino[]
  constructor() {
    this.arrVino = []
  }

  insertar(nombre: string, pvp: number) {
    const vino: Vino = new Vino(nombre, pvp)
    this.arrVino.push(vino)
    console.log(this.arrVino)
  }
}
