import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { JogoComponent } from "./components/jogo/jogo.component";
import { Erro404Component } from "./components/erro404/erro404.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {title: 'Batalha Naval - Início'}
  },

  {
    path: "jogo",
    component: JogoComponent,
    data: {title: 'Batalha Naval - Jogo'}
  },
  {
    path: '**', 
    component: Erro404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
