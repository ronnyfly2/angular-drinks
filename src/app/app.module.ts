import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { SearchComponent } from './components/search/search.component';
import { DrinkComponent } from './components/drink/drink.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';


const appRoutes : Routes = [
	{ path: '', component: DrinksComponent },
	{ path: 'drink/:id', component: DrinkComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    DrinksComponent,
    SearchComponent,
    DrinkComponent,
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forRoot(appRoutes),
		BrowserAnimationsModule,
		MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
