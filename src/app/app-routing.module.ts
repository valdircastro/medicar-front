import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from "./components/login-page/login-page.component";
import { RegistrationPageComponent } from "./components/registration-page/registration-page.component";

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'registration', component: RegistrationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
