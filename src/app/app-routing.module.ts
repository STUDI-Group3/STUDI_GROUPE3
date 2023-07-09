import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { ContactComponent } from './contact/contact/contact.component';

const routes: Routes = [
  {component: AccueilComponent, path: ''},
  {component: ContactComponent, path: '/contact'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
