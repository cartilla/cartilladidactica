import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartillainitComponent} from "./cartillainit/cartillainit.component";
import {ConsejosComponent} from "./consejos/consejos.component";



const routes: Routes = [

  {path:'',pathMatch:'full',redirectTo:'cartilla'},
  {path: 'cartilla',component:CartillainitComponent},
  {path: 'consejos', component:ConsejosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
