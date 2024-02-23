import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CopperComponent } from './components/copper/copper.component';
import { SilverComponent } from './components/silver/silver.component';
import { GoldComponent } from './components/gold/gold.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "copper",
    component: CopperComponent
  },
  {
    path: "silver",
    component: SilverComponent
  },
  {
    path: "gold",
    component: GoldComponent
  },
  {
    path: "privacy",
    component: PrivacyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
