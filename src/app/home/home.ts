import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navigation } from '../navigation/navigation';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Navigation,
    Header,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home { }
