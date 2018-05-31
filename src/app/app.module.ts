import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common"
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import {InputTextModule} from 'primeng/inputtext';
import {SlideMenuModule} from 'primeng/slidemenu';
import {CardModule} from 'primeng/card';
import { QuoteService } from '../Services/quote.service';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routing';
import { AuthorsComponent } from './authors/authors.component';
import { TagsComponent } from './tags/tags.component';
import { QuotebyauthComponent } from './quotebyauth/quotebyauth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LandingComponent,
    AuthorsComponent,
    TagsComponent,
    QuotebyauthComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    SlideMenuModule,
    CardModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
