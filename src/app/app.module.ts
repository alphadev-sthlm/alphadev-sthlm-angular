import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { IntroComponent } from './intro/intro.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ServicesProfessionComponent } from './our-services/services-profession/services-profession.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    IntroComponent,
    WelcomeComponent,
    OurServicesComponent,
    ServicesProfessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
