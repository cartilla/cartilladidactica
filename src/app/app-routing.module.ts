import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartillainitComponent} from "./cartillainit/cartillainit.component";



const routes: Routes = [

  {path: 'cartilla',component:CartillainitComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
