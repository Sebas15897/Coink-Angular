import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./app/auth/auth.module').then(m => m.AuthModule)},
  { path: 'admin', loadChildren: () => import('./app/admin/admin.module').then(m => m.AdminModule)},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'legacy'
}),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
