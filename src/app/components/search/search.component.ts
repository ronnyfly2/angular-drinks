import { Component, OnInit } from '@angular/core';
import { DrinksComponent } from '../drinks/drinks.component';
import { LoaderService } from 'src/app/services/loader.service';
import { DrinksService } from 'src/app/services/drinks.service';
import { FormControl } from '@angular/forms';
import { Typeslist } from 'src/app/shared/models/typeslist-models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
	drinkSearch= new FormControl('');
	public showListTypes:boolean
	public showListChoose:boolean
	public disBtn:boolean
	public typeString:string
	public typeList: Typeslist[]
	public copyDrinks: any[]
	public shoFilter: boolean
  constructor(
		private _loaderService:LoaderService,
		private service: DrinksService,
		private drinks: DrinksComponent
		) { }

  ngOnInit(): void {
		setTimeout(() => {
			this.typeString = '';
			this.shoFilter = false
		}, 10);
	}
	getFilter(paramForFilter:string){
		let arrayNew = this.copyDrinks.filter((drinks:any, idx)=>{
			let regex =  new RegExp(paramForFilter, 'g')
			return drinks.strAlcoholic.match(regex) || drinks.strCategory.match(regex) || drinks.strGlass.match(regex) ||  drinks.strIngredient1.match(regex)
		})
		this.drinks.drinks = arrayNew;
		console.log(arrayNew);
	}
	openList(){
		this.showListTypes = false;
		this.showListChoose = false;
		this.disBtn = false;
		setTimeout(() => {
			this.disBtn=true;
			this.showListTypes=true;
			this.showListChoose=false;
		},1000)
	}
	getType(paramType:string, paramText:string){
		this.showListTypes = false;
		this.disBtn = false;
		this.typeString = paramText;
		let array = [];
		this._loaderService.toogleLoader();
		this.service.getSearchFiltersTypes(paramType).subscribe((result: any) => {
			this._loaderService.toogleLoader();
			result.drinks.map((ele, idx)=>{
				array.push({item: ele[Object.keys(ele)[0]]})
			})
			this.typeList = array;
		});
	}
	getSearhDrink(){
		let valDrink= this.drinkSearch.value;
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
			this.copyDrinks = result.drinks;
			this.drinks.showListDrinks = true;
			this.shoFilter = true;
		});
	}

}
