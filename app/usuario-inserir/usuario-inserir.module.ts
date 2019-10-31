import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsuarioInserirPage } from './usuario-inserir.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioInserirPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsuarioInserirPage]
})
export class UsuarioInserirPageModule {}
