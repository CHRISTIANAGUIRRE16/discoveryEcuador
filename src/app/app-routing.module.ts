import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutfitComponent } from './outfit/outfit.component';
import { TouristPlacesComponent } from './touristPlaces/tourist-places.component';
import { RouletteComponent } from './roulette/roulette.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Ruta por defecto redirecciona a attire
  { path: 'attire', component: OutfitComponent },
  { path: 'tourist-spots', component: TouristPlacesComponent },
  { path: 'roulette', component: RouletteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
