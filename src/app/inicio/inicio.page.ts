import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../menu/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuarioData: any=[];
  horarioData: any=[];
  

  constructor(private api: ApiService,
    private activeroute: ActivatedRoute, 
    private router: Router) { }

    ngOnInit() {
      this.activeroute.paramMap.subscribe(p => {
        const dataUser = p.get('idUsuario')??'';
        this.api.getUser(dataUser).subscribe((data: any) => {
          this.usuarioData = data;
        });
  
        const horario = p.get('idUsuario')??'';
        this.api.getHorario(horario).subscribe((data: any) => {
          this.horarioData = data;
          });
  
      });
}
}