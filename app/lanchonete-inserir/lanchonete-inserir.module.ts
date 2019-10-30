import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LanchoneteInserirPage } from './lanchonete-inserir.page';

const routes: Routes = [
  {
    path: '',
    component: LanchoneteInserirPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LanchoneteInserirPage]
})
export class LanchoneteInserirPageModule {}
