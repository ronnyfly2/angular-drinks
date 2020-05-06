import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { DrinksService } from 'src/app/services/drinks.service';
import { FormControl } from '@angular/forms';
import { DrinksComponent } from '../drinks/drinks.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
	drinkSearch= new FormControl('');
  constructor(
		private _loaderService:LoaderService,
		private service: DrinksService,
		private drinks: DrinksComponent
		) { }

  ngOnInit(): void {
	}
	getLink(){
		let valDrink= this.drinkSearch.value

		/*if(valDrink == '' || valDrink.length > 2){
			this.isErrorValue= true;
			this.msgErrorDrink= (valDrink == '')? "El valor es requerido" : "El valor es inválido";
		}else{
			this.isErrorValue= false;
		}*/
		this._loaderService.toogleLoader();
		this.service.getSearchDrinks(valDrink).subscribe((result: any) => {
			this._loaderService.toogleLoader();
			this.drinks.drinks = result.drinks;
			console.log(this.drinks);
		});
	}

}
