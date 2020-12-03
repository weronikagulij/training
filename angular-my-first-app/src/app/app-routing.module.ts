import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  // {
  //   path: 'bulbasaur',
  //   component: DetailsComponent
  // },
  // {
  //   path: ':id',
  //   component: DetailsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
