import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  input: string = ''
  output: string = ''
  invertirTexto() {
    this.output = this.input.split('').reverse().join('')
  }
}
