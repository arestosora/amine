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
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
