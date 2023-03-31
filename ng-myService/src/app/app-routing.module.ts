import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  
  {
    path: 'login', component: UserLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
