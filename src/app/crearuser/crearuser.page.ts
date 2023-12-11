import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crearuser',
  templateUrl: './crearuser.page.html',
  styleUrls: ['./crearuser.page.scss'],
})
export class CrearuserPage implements OnInit {
  nombre: string;
  apellido: string;
  email: any;
  clave:any;
  constructor() { 
    this.nombre = "Aitor"
    this.apellido ="Menta"
    
  }

  ngOnInit() {
  }

}
