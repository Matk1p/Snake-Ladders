import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.css'
})
export class DiceComponent {
  rollResult = new EventEmitter<number>();

  rollDice() {
    const result = Math.floor(Math.random() * 6) + 1;
    this.rollResult.emit(result);
  }
}
