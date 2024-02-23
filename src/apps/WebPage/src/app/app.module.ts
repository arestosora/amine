import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NoscriptComponent } from './components/noscript/noscript.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CopperComponent } from './components/copper/copper.component';
import { SilverComponent } from './components/silver/silver.component';
import { GoldComponent } from './components/gold/gold.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductboxComponent } from './components/productbox/productbox.component';
import { UserareaComponent } from './components/userarea/userarea.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ChangeMailComponent } from './components/change-mail/change-mail.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { UserareaMenuComponent } from './components/userarea-menu/userarea-menu.component';
import { UserareaAccountComponent } from './components/userarea-account/userarea-account.component';
import { UserareaSecurityComponent } from './components/userarea-security/userarea-security.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PaymentCompletedComponent } from './components/payment-completed/payment-completed.component';
import { PaymentFailedComponent } from './components/payment-failed/payment-failed.component';
import { PaymentLoadingComponent } from './components/payment-loading/payment-loading.component';
import { PaymentMailComponent } from './components/payment-mail/payment-mail.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { SigninComponent } from './components/signin/signin.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SigninButtonComponent } from './components/signin-button/signin-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    NoscriptComponent,
    ContextMenuComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    CopperComponent,
    SilverComponent,
    GoldComponent,
    PrivacyComponent,
    ProductsComponent,
    ProductboxComponent,
    UserareaComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    ChangePasswordComponent,
    ChangeMailComponent,
    ChangeNumberComponent,
    UserareaMenuComponent,
    UserareaAccountComponent,
    UserareaSecurityComponent,
    LoginFormComponent,
    PaymentCompletedComponent,
    PaymentFailedComponent,
    PaymentLoadingComponent,
    PaymentMailComponent,
    PaymentFormComponent,
    SigninComponent,
    SigninFormComponent,
    SigninButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
