import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navigation } from '../navigation/navigation';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [CommonModule, Navigation, Footer],
  templateUrl: './ui.html',
  styleUrls: ['./ui.scss']
})
export class UiComponent {
  
  sampleCards = [
    {
      title: 'Card Primaria',
      text: 'Esta es una card con estilo primario',
      buttonText: 'Botón Primario',
      type: 'primary'
    },
    {
      title: 'Card Secundaria',
      text: 'Esta es una card con estilo secundario',
      buttonText: 'Botón Secundario',
      type: 'secondary'
    },
    {
      title: 'Card de Éxito',
      text: 'Esta es una card con estilo de éxito',
      buttonText: 'Botón de Éxito',
      type: 'success'
    },
    {
      title: 'Card de Peligro',
      text: 'Esta es una card con estilo de peligro',
      buttonText: 'Botón de Peligro',
      type: 'danger'
    }
  ];
}
