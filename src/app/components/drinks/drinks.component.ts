import { Component, OnInit } from '@angular/core';
import { DrinksService } from 'src/app/services/drinks.service';
import { Drinks } from 'src/app/shared/models/drinks-models';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.sass']
})
export class DrinksComponent implements OnInit {
	public drinks: Drinks[];
  constructor(private service: DrinksService) { }

  ngOnInit(): void {
  }

}
