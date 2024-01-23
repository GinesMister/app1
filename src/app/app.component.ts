import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  operandoA = ''
  operandoB = ''
  output = 0

  sumar(operandoA: HTMLInputElement, operandoB: HTMLInputElement, resultado: HTMLInputElement) {
    resultado.value = String(Number(operandoA.value) + Number(operandoB.value))
  }
}
