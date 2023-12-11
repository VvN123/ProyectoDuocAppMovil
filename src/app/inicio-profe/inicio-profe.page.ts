import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../menu/api.service';

@Component({
  selector: 'app-inicio-profe',
  templateUrl: './inicio-profe.page.html',
  styleUrls: ['./inicio-profe.page.scss'],
})
export class InicioProfePage implements OnInit {

  usuarioData: any=[];
  asignaturaData: any=[];
  

  constructor(private api: ApiService,
    private activeroute: ActivatedRoute, 
    private router: Router) { }

    ngOnInit() {
      this.activeroute.paramMap.subscribe(p => {
        const dataUser = p.get('idUsuario')??'';
        this.api.obtenerUsuario(dataUser).then((data: any) => {
        this.usuarioData = data;
        });
  
  //      const asignatura = p.get('idUsuario')??'';
   //     this.api.(asignatura).subscribe((data: any) => {
    //      this.asignaturaData = data;
      //    });
  
      });
}
}