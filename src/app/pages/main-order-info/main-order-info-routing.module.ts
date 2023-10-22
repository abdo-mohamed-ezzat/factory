import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainOrderInfoPage } from './main-order-info.page';

const routes: Routes = [
  {
    path: '',
    component: MainOrderInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainOrderInfoPageRoutingModule {}
