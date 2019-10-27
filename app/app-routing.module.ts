import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loading-screen',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'loading-screen', loadChildren: './loading-screen/loading-screen.module#LoadingScreenPageModule' },
  { path: 'dev', loadChildren: './dev/dev.module#DevPageModule' },
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
  { path: 'lanchonete-inserir', loadChildren: './lanchonete-inserir/lanchonete-inserir.module#LanchoneteInserirPageModule' },
  { path: 'lanchonete-deletar', loadChildren: './lanchonete-deletar/lanchonete-deletar.module#LanchoneteDeletarPageModule' },
  { path: 'lanchonete-listar', loadChildren: './lanchonete-listar/lanchonete-listar.module#LanchoneteListarPageModule' },
  { path: 'lanchonete-editar', loadChildren: './lanchonete-editar/lanchonete-editar.module#LanchoneteEditarPageModule' },
  { path: 'usuario-listar', loadChildren: './usuario-listar/usuario-listar.module#UsuarioListarPageModule' },
  { path: 'usuario-deletar', loadChildren: './usuario-deletar/usuario-deletar.module#UsuarioDeletarPageModule' },
  { path: 'usuario-inserir', loadChildren: './usuario-inserir/usuario-inserir.module#UsuarioInserirPageModule' },
  { path: 'usuario-editar', loadChildren: './usuario-editar/usuario-editar.module#UsuarioEditarPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
