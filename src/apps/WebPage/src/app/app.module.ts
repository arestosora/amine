import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// APP-routing
import { AppRoutingModule } from './app-routing.module';

// APP-component
import { AppComponent } from './app.component';

// Basics
import { Loader } from './components/basics/loader/loader.component';
import { Header } from './components/basics/header/header.component';
import { NoScript } from './components/basics/no-script/no-script.component';
import { ContextMenu } from './components/basics/context-menu/context-menu.component';

// Home
import { HomePage } from './components/home/home.component';

// Copper
import { CopperPage } from './components/copper/copper.component';

// Silver
import { SilverPage } from './components/silver/silver.component';

// Gold
import { GoldPage } from './components/gold/gold.component';

// Privacy
import { PrivacyPage } from './components/privacy/privacy.component';

// Products
import { ProductsPage } from './components/products/products.component';

// Payment
import { PaymentPage } from './components/payment/payment.component';
  
  // Payment
  import { PaymentLoading } from './components/payment/loading/loading.component';
  import { PaymentCompleted } from './components/payment/completed/completed.component';
  import { PaymentFailed } from './components/payment/failed/failed.component';
  import { PaymentForm } from './components/payment/form/form.component';
    import { PaymentFormPersonal } from './components/payment/form/personal/personal.component';
    import { PaymentFormMail } from './components/payment/form/mail/mail.component';
    import { PaymentFormPlan } from './components/payment/form/plan/plan.component';
  
// Materials
  // Products container
  import { ProductsContainer } from './components/productbox/productbox.component';

  //Form-fields
  import { FormText } from './components/inputs/text/text.component';
  import { FormNumber } from './components/inputs/number/number.component';
  import { FormMail } from './components/inputs/mail/mail.component';
  import { InputCheckbox } from './components/inputs/checkbox/checkbox.component';
  import { InputRadio } from './components/inputs/radio/radio.component';
import { DateComponent } from './components/inputs/date/date.component';

@NgModule({
  declarations: [
    // APP-component
    AppComponent,

    // Basics
    Loader,
    Header,
    NoScript,
    ContextMenu,
    
    // Home
    HomePage,
    
    // Copper
    CopperPage,
    
    // Silver
    SilverPage,
    
    // Gold
    GoldPage,
    
    // Privacy
    PrivacyPage,
    
    // Products
    ProductsPage,
    
    //Payment
    PaymentPage,
    PaymentLoading,
    PaymentCompleted,
    PaymentFailed,
    PaymentForm,
    PaymentFormPersonal,
    PaymentFormMail,
    PaymentFormPlan,

    // Products container
    ProductsContainer,

    // Form-fields
    FormText,
    FormNumber,
    FormMail,
    InputCheckbox,
    InputRadio,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
