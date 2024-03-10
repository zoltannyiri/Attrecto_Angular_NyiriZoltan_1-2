import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() counter: number = 26;
  errorMessage: string = '';

  increaseCounter() {
    this.errorMessage = '';
    if (this.counter < 0){
      this.errorMessage = 'Nem adható meg ilyen szám';
      this.counter = 0;
    }
    this.counter++;
  }

  decreaseCounter() {
    if (this.counter > 0) {
      this.counter--;
    }
    else {
      this.errorMessage = 'Nem adható meg ilyen szám';
    }
  }
}
