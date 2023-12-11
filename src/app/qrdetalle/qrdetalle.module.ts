import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRdetallePageRoutingModule } from './qrdetalle-routing.module';

import { QRdetallePage } from './qrdetalle.page';

import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    QRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    QRdetallePageRoutingModule
  ],
  declarations: [QRdetallePage]
})
export class QRdetallePageModule {}
