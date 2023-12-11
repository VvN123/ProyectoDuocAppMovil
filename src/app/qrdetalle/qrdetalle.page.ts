import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../menu/api.service';
@Component({
  selector: 'app-qrdetalle',
  templateUrl: './qrdetalle.page.html',
  styleUrls: ['./qrdetalle.page.scss'],
})
export class QRdetallePage implements OnInit {

  seccionQR: any=[];

  constructor(private api: ApiService,
    private activeroute: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {

    this.activeroute.paramMap.subscribe(p => {
      const dataUser = p.get('idAsignatura') ?? "";
        this.api.getInfoQR(dataUser).subscribe(userData => {
          this.seccionQR = userData;
        });
      });
  }

  

}

