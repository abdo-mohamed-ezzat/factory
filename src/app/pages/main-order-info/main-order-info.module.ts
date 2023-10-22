import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainOrderInfoPageRoutingModule } from './main-order-info-routing.module';

import { MainOrderInfoPage } from './main-order-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainOrderInfoPageRoutingModule
  ],
  declarations: [MainOrderInfoPage]
})
export class MainOrderInfoPageModule {}
