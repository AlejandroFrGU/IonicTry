import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
  // {
  //   path: 'lista',
  //   loadChildren: () => import('./lista/lista.module').then( m => m.ListaPageModule)
  // },
  // {
  //   path: 'edit',
  //   loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
