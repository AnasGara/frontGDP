import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
//    canActivate: [AuthClassGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
//    canActivate: [AuthClassGuard]
  },
  { path: '**', redirectTo: 'singup' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
