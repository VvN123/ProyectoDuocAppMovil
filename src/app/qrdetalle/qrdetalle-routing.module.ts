import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRdetallePage } from './qrdetalle.page';

const routes: Routes = [
  {
    path: '',
    component: QRdetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRdetallePageRoutingModule {}
