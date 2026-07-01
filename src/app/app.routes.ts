import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DonateComponent } from './components/donate/donate.component';

export const routes: Routes = [
    {path:'home', component:HomepageComponent},
    {path:'donate',component:DonateComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'},
  //{path:"**", component:ErrorPageComponent}
];
