import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
  { path: 'dev', loadChildren: './dev/dev.module#DevPageModule' },  { path: 'lanchonete-inserir', loadChildren: './lanchonete-inserir/lanchonete-inserir.module#LanchoneteInserirPageModule' },
  { path: 'lanchonete-deletar', loadChildren: './lanchonete-deletar/lanchonete-deletar.module#LanchoneteDeletarPageModule' },
  { path: 'lanchonete-editar', loadChildren: './lanchonete-editar/lanchonete-editar.module#LanchoneteEditarPageModule' },
  { path: 'lanchonete-listar', loadChildren: './lanchonete-listar/lanchonete-listar.module#LanchoneteListarPageModule' },
  { path: 'usuario-inserir', loadChildren: './usuario-inserir/usuario-inserir.module#UsuarioInserirPageModule' },
  { path: 'usuario-deletar', loadChildren: './usuario-deletar/usuario-deletar.module#UsuarioDeletarPageModule' },
  { path: 'usuario-editar', loadChildren: './usuario-editar/usuario-editar.module#UsuarioEditarPageModule' },
  { path: 'usuario-listar', loadChildren: './usuario-listar/usuario-listar.module#UsuarioListarPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
