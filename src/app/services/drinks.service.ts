import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API = 'https://www.thecocktaildb.com/api/json/v1/1/';
@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor(
		private http: HttpClient
	) { }

	getSearchDrinks(value: string){
		return this.http.get( `${API}search.php?s=${value}` )
	}
}
