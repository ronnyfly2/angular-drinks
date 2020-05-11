import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { SearchComponent } from './components/search/search.component';
import { DrinkComponent } from './components/drink/drink.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';


const appRoutes : Routes = [
	{ path: '', component: DrinksComponent },
	{ path: ':search', component: DrinksComponent },
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
		HttpClientJsonpModule,
		RouterModule.forRoot(appRoutes),
		BrowserAnimationsModule,
		MatCardModule,
		MatSelectModule,
		MatButtonToggleModule,
		MatInputModule,
		MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
