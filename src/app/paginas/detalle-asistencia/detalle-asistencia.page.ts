import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicio/firebase.service';
import { Asistencia } from 'src/app/modelo/asistencia';
import { Usuario } from 'src/app/modelo/usuario';

@Component({
  selector: 'app-detalle-asistencia',
  templateUrl: './detalle-asistencia.page.html',
  styleUrls: ['./detalle-asistencia.page.scss'],
})
export class DetalleAsistenciaPage implements OnInit {

  seccionQR: any = []; // Si tienes un modelo para esto, también deberías usarlo
  id_asitencia: string = '';
  detalleAsistencia: Asistencia = new Asistencia(); // Usando el modelo Asistencia
  usuariosPresentes: Usuario[] = []; // Array de objetos Usuario


  constructor(
    private fire: FirebaseService,
    private activeroute: ActivatedRoute,
  ) { }


  async ngOnInit() {
    this.activeroute.queryParams.subscribe(async params => {
      this.id_asitencia = params['id_asistencia'];
      if (this.id_asitencia) {
        try {
          const asistencia : Asistencia = await this.fire.obtenerAsistencia(this.id_asitencia);
          console.log('flag asis'+asistencia.nombreClase)
          console.log('flag asis'+asistencia.alumnos_presentes)
          if (asistencia) {
            this.detalleAsistencia = asistencia;
            await this.cargarUsuariosPresentes();
          } else {
            console.log('No se encontró la asistencia');
          }
        } catch (error) {
          console.error('Error al obtener la asistencia:', error);
        }
      }
    });
  }
  
  async cargarUsuariosPresentes() {
    this.usuariosPresentes = []; // Reiniciar la lista de usuarios presentes
    console.log('flag 1')
    if (this.detalleAsistencia && this.detalleAsistencia.alumnos_presentes) {
      console.log('flag 2')
      for (const idUsuario of this.detalleAsistencia.alumnos_presentes) {
        try {
          const usuarioInfo = await this.fire.obtenerUsuario(idUsuario);
          if (usuarioInfo) {
            this.usuariosPresentes.push(usuarioInfo);
          }
        } catch (error) {
          console.error(`Error al cargar el usuario con ID ${idUsuario}:`, error);
        }
      }
    }
  }
  
}
