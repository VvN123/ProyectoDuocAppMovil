import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,ToastController } from '@ionic/angular';
import { ApiService } from './api.service';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  usuario: string="";
  clave: string="";

  constructor(private crud : CrudService, private router: Router, private alertController: AlertController, private toastController: ToastController, private api: ApiService) {
    
  }
  ngOnInit() {
    
  }
  async errorUsuario(){
    const toast = await this.toastController.create({
      message:'Usuario o Contraseña Invalida',
      duration: 2000,
      position: 'bottom',
      color: 'danger',
    });
    await toast.present();
  }

  async iniciarSesion() {
    try {
      const usuario = await this.api.obtenerUsuario(this.usuario);
      if (usuario && usuario.contrasena === this.clave) {
        console.log('Inicio de sesión exitoso');
        await this.crud.setCurrentUser(usuario); // Guardar información del usuario

        // Redirección basada en el estado del usuario
        if (usuario.estado === 1) {
          this.router.navigate(['/inicio']); //<----PAGINA PARA REEDIRIGIR ALUMNO
        } else if (usuario.estado === 0) {
          this.router.navigate(['/inicio-profe']); //<----PAGINA PARA REEDIRIGIR PROFESOR
        }
      } else {
        console.log('Credenciales incorrectas');
        // Manejar el caso de credenciales incorrectas
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      // Manejar errores, como problemas de conexión o de servidor
    }
  }
  
  
  
}
