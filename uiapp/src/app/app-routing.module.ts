import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {path:"dashboard",component:DashboardComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"AppComponent",pathMatch:"full"}//Login/Home Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
