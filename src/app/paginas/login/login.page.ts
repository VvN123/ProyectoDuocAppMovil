import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/servicio/firebase.service';
import { Usuario } from 'src/app/modelo/usuario';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: Usuario = new Usuario()
  usuario = '';
  contrasena = '';

  constructor(
    private menuController: MenuController,
    private alertController: AlertController,
    private fire: FirebaseService,
    private router: Router ) { }

  ngOnInit() {
  }

  mostrarMenu() {
    this.menuController.open('first');
  }


  async Enviar() {
    const usuario = await this.fire.obtenerUsuario(this.usuario);
    if (usuario && usuario.contrasena === this.contrasena) {
      // Mostrar alerta de éxito
      await this.fire.setCurrentUser(usuario);
      const alert = await this.alertController.create({
        header: 'Ingreso correctamente',
        message: 'Bienvenido a Duoc UC!',
        buttons: ['OK']
      });
      await alert.present();

      // Redirigir basado en esProfesor
      if (usuario.esProfesor) {
        this.router.navigateByUrl('/home-profesor'); // Ruta de profesor
      } else {
        this.router.navigateByUrl('/home-alumno'); // Ruta de alumno
      }
    } else {
      // Mostrar alerta de error
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
