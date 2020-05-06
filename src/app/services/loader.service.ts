import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
	showLoader = false;

	@Output() changeLoader: EventEmitter<boolean> = new EventEmitter();
	constructor() { }
	toogleLoader(){
    this.showLoader = !this.showLoader;

    if(this.showLoader){
      document.body.classList.add("loader");
    }else{
      document.body.classList.remove("loader");
    }

    this.changeLoader.emit(this.showLoader);
  }
}

