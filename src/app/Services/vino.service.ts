import { Injectable } from '@angular/core';
import { Vino } from '../Models/vinoDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VinoService {

  arrVino: Vino[]
  vinoUrl: string
  constructor(public http:HttpClient) {
    this.vinoUrl = 'https://vinoteca-4f626-default-rtdb.firebaseio.com/vino.json'

    this.arrVino = []
    this.http.get<any>(this.vinoUrl)
      .subscribe (response => {
        this.arrVino = Object.values(response)
        console.log("Vinos cargados")
      })
  }

  insertar(nombre: string, pvp: number) {
    const vino: Vino = new Vino(nombre, pvp)
    this.arrVino.push(vino)
    this.http.put(this.vinoUrl, JSON.stringify(this.arrVino))
      .subscribe(response => {
        console.log(response);
      })
    console.log(this.arrVino)
  }
}
