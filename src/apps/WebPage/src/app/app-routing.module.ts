import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './components/home/home.component';
import { CopperPage } from './components/copper/copper.component';
import { SilverPage } from './components/silver/silver.component';
import { GoldPage } from './components/gold/gold.component';
import { PrivacyPage } from './components/privacy/privacy.component';
import { PaymentPage } from './components/payment/payment.component';

const routes: Routes = [
  {
    path: "",
    component: HomePage
  },
  {
    path: "copper",
    component: CopperPage
  },
  {
    path: "silver",
    component: SilverPage
  },
  {
    path: "gold",
    component: GoldPage
  },
  {
    path: "privacy",
    component: PrivacyPage
  },
  {
    path: "pay",
    component: PaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
