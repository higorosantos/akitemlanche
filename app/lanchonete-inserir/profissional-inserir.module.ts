import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfissionalInserirPage } from './profissional-inserir.page';

const routes: Routes = [
  {
    path: '',
    component: ProfissionalInserirPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfissionalInserirPage]
})
export class ProfissionalInserirPageModule {}
