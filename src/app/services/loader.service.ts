import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
	public showLoader: boolean;
	@Output() changeLoader: EventEmitter<boolean> = new EventEmitter();
	constructor() { }
	ngOnInit(): void {
    this.showLoader = false;
  }
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

