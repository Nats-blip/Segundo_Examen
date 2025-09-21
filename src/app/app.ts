import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html', // Asegúrate que este archivo existe
  styleUrl: './app.scss'
})
export class App {
  title = 'Segundo_Examen';
}
