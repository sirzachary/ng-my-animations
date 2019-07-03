import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LottieAnimationViewModule } from 'ng-lottie';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Combo0Component } from './components/animated-lists/combo0/combo0.component';
import { Combo1Component } from './components/animated-lists/combo1/combo1.component';
import { Combo2Component } from './components/animated-lists/combo2/combo2.component';
import { Combo3Component } from './components/animated-lists/combo3/combo3.component';
import BurgerLabModule from '@haiku/sirzachary-burgerlab/angular-module';


@NgModule({
  declarations: [
    AppComponent,
    Combo0Component,
    Combo1Component,
    Combo2Component,
    Combo3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    BurgerLabModule,
    LottieAnimationViewModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
