import { Component } from '@angular/core';
import { Contacto } from './models/contactoDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  agenda: Contacto[] = []

  insertar(nombre: HTMLInputElement, telefono: HTMLInputElement, email: HTMLInputElement) {
    const contacto: Contacto = new Contacto(nombre.value, telefono.value, email.value)
    this.agenda.push(contacto)
  }
}