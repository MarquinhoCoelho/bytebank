import { HomeComponent } from './home/home.component';

import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';
import { Extrato2Component } from './extrato2/extrato2.component';
import { PrimeNGComponent } from './prime-ng/prime-ng.component';

export const routes: Routes = [

  { path: '',redirectTo: 'home', pathMatch:'full'},
  { path: 'extrato', component: ExtratoComponent },
  { path: 'nova-transferencia', component: NovaTransferenciaComponent},
  { path: 'extrato2', component: Extrato2Component },
  { path: 'home', component: HomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
