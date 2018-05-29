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
import { QuoteService } from '../Services/quote.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    SlideMenuModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
