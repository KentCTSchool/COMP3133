import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminUserComponent } from './admin-user/admin-user.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  // { path: 'home', component: AppComponent},
  { path: 'user', component: UserComponent},
  { path: 'login', component:LoginComponent},
  { path: 'sign_up', component: SignUpComponent},
  { path: 'admin-user', component: AdminUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }