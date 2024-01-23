import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  inputA = ''
  inputB = ''
  output = 0

  sumar() {
    this.output = Number(this.inputA) + Number(this.inputB)
    this.inputA = ''
    this.inputB = ''
  }
  restar() {
    this.output = Number(this.inputA) + Number(this.inputB)
    this.inputA = ''
    this.inputB = ''
  }
  multiplicar() {
    this.output = Number(this.inputA) + Number(this.inputB)
    this.inputA = ''
    this.inputB = ''
  }
  dividir() {
    this.output = Number(this.inputA) + Number(this.inputB)
    this.inputA = ''
    this.inputB = ''
  }
}
