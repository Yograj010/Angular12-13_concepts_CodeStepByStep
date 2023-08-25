import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*--This is an example of lazy loading, this route will load only when it is called, also we have not directly defined this module in app.module.ts file--*/
  {
    path: 'admin',
    loadChildren: ()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path: 'user',
    loadChildren: ()=>import('./user/user.module').then(mod=>mod.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
