import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LanchoneteListarPage } from './lanchonete-listar.page';

const routes: Routes = [
  {
    path: '',
    component: LanchoneteListarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LanchoneteListarPage]
})
export class LanchoneteListarPageModule {}
