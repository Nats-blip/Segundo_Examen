import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private permission: NotificationPermission = 'default';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.checkPermission();
    }
  }

  checkPermission(): NotificationPermission {
    if (!this.isSupported()) {
      return 'denied';
    }
    this.permission = Notification.permission;
    return this.permission;
  }

  async requestPermission(): Promise<NotificationPermission> {
    if (!this.isSupported()) {
      console.warn('Este navegador no soporta notificaciones');
      return 'denied';
    }

    try {
      this.permission = await Notification.requestPermission();
      console.log('Permiso de notificaciones:', this.permission);
      return this.permission;
    } catch (error) {
      console.error('Error solicitando permiso:', error);
      return 'denied';
    }
  }

  showTestNotification(): void {
    if (!this.isSupported()) {
      alert('Tu navegador no soporta notificaciones');
      return;
    }

    if (this.permission !== 'granted') {
      alert('Primero debes permitir las notificaciones. Haz clic en "Permitir Notificaciones"');
      return;
    }

    try {
      const notification = new Notification('Start Bootstrap', {
        body: '¡Esta es una notificación de prueba desde Start Bootstrap!',
        icon: '/Segundo_Examen/assets/icons/icon-192x192.png',
        tag: 'test-notification'
      });

      setTimeout(() => {
        notification.close();
      }, 5000);

      notification.onclick = (event) => {
        event.preventDefault();
        window.focus();
        notification.close();
      };

    } catch (error) {
      console.error('Error creando notificación:', error);
      alert('Error al mostrar la notificación');
    }
  }

  getPermissionStatus(): NotificationPermission {
    return this.permission;
  }

  isSupported(): boolean {
    return this.isBrowser && 'Notification' in window;
  }

  getPermissionText(): string {
    if (!this.isBrowser) return 'No disponible en servidor';
    
    switch (this.permission) {
      case 'granted': return 'Permitido';
      case 'denied': return 'Denegado';
      default: return 'No decidido';
    }
  }
}