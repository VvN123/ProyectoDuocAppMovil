import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from 'src/app/modelo/usuario';
import { Clase } from 'src/app/modelo/clase';
import { FirebaseService } from 'src/app/servicio/firebase.service';
import { Asistencia } from 'src/app/modelo/asistencia';

@Component({
  selector: 'app-home-profesor',
  templateUrl: './home-profesor.page.html',
  styleUrls: ['./home-profesor.page.scss'],
})
export class HomeProfesorPage implements OnInit {

  // Listas para almacenar las clases y asistencias
  clases: Clase[] = [];
  asistencias: Asistencia[] = [];

  // Usuario actual
  usuario: Usuario = new Usuario();

  // Inyecta dependencias necesarias
  constructor(private storage: Storage, private fire: FirebaseService, private router: Router) { }

  // Se ejecuta al inicializar el componente
  ngOnInit() {
    this.cargarDatosUsuario();
    this.cargarAsistencias();
  }

  // Carga las asistencias desde Firebase
  async cargarAsistencias() {
    try {
      const todasLasAsistencias = await this.fire.obtenerTodasLasAsistencias();
      if (todasLasAsistencias) {
        this.asistencias = Object.values(todasLasAsistencias);
      } else {
        console.log('No se encontraron asistencias');
      }
    } catch (error) {
      console.error('Error al cargar las asistencias:', error);
    }
  }

  // Carga los datos del usuario actual
  async cargarDatosUsuario() {
    const usuario = await this.storage.get('currentUser');
    if (usuario) {
      this.usuario = usuario;
      console.log(usuario);
      await this.cargarAsignaturas();
    } else {
      console.log('No se encontraron datos del usuario');
    }
  }

  // Carga las asignaturas que imparte el usuario actual
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

  // Navega al detalle de una asignatura específica
  verDetalleAsignatura(codigo: string) {
    console.log('codigo'+codigo);
    this.router.navigate(['/detalle-clase'], {
      queryParams: { codigo: codigo }
    });
  }

  // Navega al detalle de una asistencia específica
  verDetalleAsistencia(uuid: string){
    this.router.navigate(['/detalle-asistencia'], {
      queryParams: { id_asistencia: uuid }
    });
  }
}
