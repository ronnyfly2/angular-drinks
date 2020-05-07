import { Component, OnInit } from '@angular/core';
import { Drinks } from 'src/app/shared/models/drinks-models';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.sass']
})
export class DrinksComponent implements OnInit {
	public drinks: Drinks[];
	public showListDrinks: boolean;
  constructor() { }

  ngOnInit(): void {
		this.showListDrinks = false;
  }

}
