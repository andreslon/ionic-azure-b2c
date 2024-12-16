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
      // Asegúrate de que MSAL maneje las redirecciones correctamente
      const result = await this.msalService.instance.handleRedirectPromise();
      if (result) {
        console.log('Inicio de sesión exitoso:', result);
      } else {
        console.log('No hay redirección activa.');
      }
    } catch (error) {
      console.error('Error durante la inicialización de MSAL:', error);
    }
  }

  login(): void {
    console.log('Iniciando sesión...');
    this.msalService.loginRedirect();
  }

  logout(): void {
    console.log('Cerrando sesión...');
    this.msalService.logoutRedirect();
  }
}
