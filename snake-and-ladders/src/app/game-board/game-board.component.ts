import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent {
    board: number[] = [];

    ngOnInit() {
      this.initializeBoard();
    }

    initializeBoard() {
      for (let i = 0; i < 100; i++) {
        this.board.push(i + 1);
      }
    }

    getCellClass(index: number): string {
      // Add classes for snakes and ladders here
      return '';
    }

    players: { name: string, position: number }[] = [
      { name: 'Player 1', position: 0 },
      { name: 'Player 2', position: 0 }
    ];

    
}
