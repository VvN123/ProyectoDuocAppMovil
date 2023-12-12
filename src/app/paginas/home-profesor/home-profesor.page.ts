import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from 'src/app/modelo/usuario';
import { Clase } from 'src/app/modelo/clase';
import { FirebaseService } from 'src/app/servicio/firebase.service';


@Component({
  selector: 'app-home-profesor',
  templateUrl: './home-profesor.page.html',
  styleUrls: ['./home-profesor.page.scss'],
})
export class HomeProfesorPage implements OnInit {

  clases: Clase[] = []; // Lista para almacenar las asignaturas

  usuario : Usuario = new Usuario()
  constructor(private storage: Storage , private fire: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.cargarDatosUsuario()
  }

  async cargarDatosUsuario() {
    const usuario = await this.storage.get('currentUser');
    if (usuario) {
      this.usuario = usuario;
      console.log(usuario);
      await this.cargarAsignaturas(); // Cargar las asignaturas del usuario
    } else {
      console.log('No se encontraron datos del usuario');
      // Manejar la situación cuando no hay datos del usuario
    }
  }

  async cargarAsignaturas() {
    for (const nombreAsignatura of this.usuario.clase_a_cargo) {
      try {
        const asignatura = await this.fire.obtenerAsignatura(nombreAsignatura);
        if (asignatura) {
          this.clases.push(asignatura);
        } else {
          console.log(`Asignatura no encontrada: ${nombreAsignatura}`);
        }
      } catch (error) {
        console.error(`Error al cargar la asignatura ${nombreAsignatura}:`, error);
      }
    }
    console.log('Asignaturas cargadas:', this.clases);
  }
  
  verDetalleAsignatura(codigo: string) {
    this.router.navigate(['/detalle-clase'], {
      queryParams: { codigo: codigo }
    });
  }
}
