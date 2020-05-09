import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.sass']
})
export class DrinkComponent implements OnInit {

  constructor(
		private actRoute: ActivatedRoute
	) { }

  ngOnInit(): void {
  }

}
