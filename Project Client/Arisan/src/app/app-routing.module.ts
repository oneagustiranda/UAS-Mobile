import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
     path: '',
     loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  //{
  //  path: '',
  //  loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  //},
  {
    path: 'group-add',
    loadChildren: () => import('./group-add/group-add.module').then( m => m.GroupAddPageModule)
  },
  {
    path: 'group-detail/:id',
    loadChildren: () => import('./group-detail/group-detail.module').then( m => m.GroupDetailPageModule)
  },
  {
    path: 'user-add/:id',
    loadChildren: () => import('./user-add/user-add.module').then( m => m.UserAddPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'unpaid-user/:id',
    loadChildren: () => import('./unpaid-user/unpaid-user.module').then( m => m.UnpaidUserPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
