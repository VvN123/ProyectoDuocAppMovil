import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicio/firebase.service';
import { Clase } from 'src/app/modelo/clase';

@Component({
  selector: 'app-detalle-clase',
  templateUrl: './detalle-clase.page.html',
  styleUrls: ['./detalle-clase.page.scss'],
})
export class DetalleClasePage implements OnInit {


  asignatura : Clase = new Clase()
  codigoAsignatura: string = '';

  constructor(private activatedroute: ActivatedRoute, private fire:FirebaseService, private router : Router) { }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(async params => {
      if (params['codigo']) {
        
        this.codigoAsignatura = params['codigo'];
        console.log(''this.codigoAsignatura)
        const asignaturaObtenida = await this.fire.obtenerAsignatura(this.codigoAsignatura);
        if (asignaturaObtenida) {
          this.asignatura = asignaturaObtenida;
        } else {
          // Manejar el caso de que la asignatura no se encuentre
          console.log('Asignatura no encontrada');
        }
      }
    });
  }

  async crearAsistencia(){
    const uuid = await this.fire.crearAsistencia(this.asignatura)
    this.verDetalleAsignatura(uuid)

  }

  verDetalleAsignatura(id_asistencia: string) {
    this.router.navigate(['/qr'], {
      queryParams: { id_asistencia: id_asistencia }
    });
  }

}
