import { Component, OnInit } from '@angular/core';
import { LoaderService } from "../../services/loader.service";
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent implements OnInit {
	public isShow:boolean;
  constructor(private _loaderService:LoaderService) { }

  ngOnInit(): void {
		this._loaderService.changeLoader.subscribe(showLoader => {
      this.isShow = showLoader;
    })
  }

}
