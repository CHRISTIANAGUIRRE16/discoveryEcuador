import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TouristPlacesComponent } from './touristPlaces/tourist-places.component';
import { OutfitComponent } from './outfit/outfit.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouletteComponent } from './roulette/roulette.component';

@NgModule({
  declarations: [
    AppComponent,
    TouristPlacesComponent,
    OutfitComponent,
    NavbarComponent,
    FooterComponent,
    RouletteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
