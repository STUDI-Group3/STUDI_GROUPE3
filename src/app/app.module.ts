import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { PrestationsComponent } from './prestations/prestations/prestations.component';
import { ProduitsComponent } from './produits/produits/produits.component';
import { MarquesComponent } from './marques/marques/marques.component';
import { EsperienceComponent } from './esperience/esperience/esperience.component';
import { ContactComponent } from './contact/contact/contact.component';
import { HearderComponent } from './header/hearder/hearder.component';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PrestationsComponent,
    ProduitsComponent,
    MarquesComponent,
    EsperienceComponent,
    ContactComponent,
    HearderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
