import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navigation } from '../navigation/navigation';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterModule } from '@angular/router';
import { NotificationButtons } from '../notification-buttons/notification-buttons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    Navigation,
    Header,
    Footer,
    NotificationButtons
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
}
