import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from "./components/login-page/login-page.component";
import { RegistrationPageComponent } from "./components/registration-page/registration-page.component";
import { ConsultationsPageComponent } from "./components/consultations-page/consultations-page.component";
import { NewConsulationPageComponent } from "./components/new-consulation-page/new-consulation-page.component";


const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'consulations', component: ConsultationsPageComponent},
  {path: 'new-consulation', component: NewConsulationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
