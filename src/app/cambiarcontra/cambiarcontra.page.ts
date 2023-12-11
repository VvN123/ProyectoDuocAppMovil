import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cambiarcontra',
  templateUrl: 'cambiarcontra.page.html',
  styleUrls: ['cambiarcontra.page.scss'],
})
export class CambiarcontraPage {
  public email: string = ''; // Inicializamos la variable email con una cadena vacía

  constructor(public alertController: AlertController) {}

  async mostrarAlerta() {
    console.log('La función mostrarAlerta() se ha llamado.'); // Agregar un mensaje de registro
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Correo enviado con éxito',
      buttons: ['OK']
    });

    await alert.present();
  }
}
