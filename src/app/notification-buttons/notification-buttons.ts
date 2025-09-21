import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notification-buttons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="notification-buttons my-4">
      <div class="d-grid gap-2 d-md-flex justify-content-md-center">
        <button 
          class="btn btn-primary me-md-2" 
          (click)="requestPermission()"
          [disabled]="!isSupported || permission === 'granted'">
          <i class="bi bi-bell-fill me-2"></i>
          {{ getButtonText() }}
        </button>

        <button 
          class="btn btn-outline-secondary" 
          (click)="testNotification()"
          [disabled]="permission !== 'granted'">
          <i class="bi bi-chat-square-text-fill me-2"></i>
          Probar Notificación
        </button>
      </div>

      <div class="text-center mt-3">
        <small class="text-muted">
          Estado: 
          <span [class.text-success]="permission === 'granted'"
                [class.text-warning]="permission === 'default'"
                [class.text-danger]="permission === 'denied'">
            {{ getPermissionText() }}
          </span>
          {{ !isSupported ? ' (No soportado)' : '' }}
        </small>
      </div>
    </div>
  `,
  styles: [`
    .notification-buttons {
      max-width: 500px;
      margin: 0 auto;
    }
    button:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `]
})
export class NotificationButtons {
  permission: NotificationPermission = 'default';
  isSupported: boolean = true;

  constructor(private notificationService: NotificationService) {
    this.initializeNotifications();
  }

  private initializeNotifications(): void {
    this.isSupported = this.notificationService.isSupported();
    this.permission = this.notificationService.getPermissionStatus();
    
    if (!this.isSupported) {
      console.warn('Notificaciones no soportadas');
    }
  }

  async requestPermission(): Promise<void> {
    if (!this.isSupported) {
      alert('Tu navegador no soporta notificaciones');
      return;
    }

    this.permission = await this.notificationService.requestPermission();
    
    if (this.permission === 'granted') {
      console.log('Permiso concedido');
    } else if (this.permission === 'denied') {
      alert('Permisos denegados. Puedes cambiarlo en configuración del navegador.');
    }
  }

  testNotification(): void {
    this.notificationService.showTestNotification();
  }

  getPermissionText(): string {
    return this.notificationService.getPermissionText();
  }

  getButtonText(): string {
    switch (this.permission) {
      case 'granted': return 'Notificaciones Permitidas';
      case 'denied': return 'Permiso Denegado';
      default: return 'Permitir Notificaciones';
    }
  }
}