import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private msalService: MsalService) {}

  async ngOnInit(): Promise<void> {
    try {
      // Maneja redirecciones después del inicio de sesión
      await this.msalService.instance.handleRedirectPromise();
      console.log('MSAL inicializado correctamente.');
    } catch (error) {
      console.error('Error inicializando MSAL:', error);
    }
  }

  login(): void {
    console.log('Botón de login clickeado');
    this.msalService.loginRedirect({
      scopes: ['openid', 'profile', 'email'],
    });
  }

  logout(): void {
    console.log('Cerrando sesión...');
    this.msalService.logoutRedirect();
  }
}
