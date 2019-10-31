import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LanchoneteEditarPage } from './lanchonete-editar.page';

const routes: Routes = [
  {
    path: '',
    component: LanchoneteEditarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LanchoneteEditarPage]
})
export class LanchoneteEditarPageModule {}
