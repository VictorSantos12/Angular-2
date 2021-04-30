import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  exemplo: boolean = true;

  constructor() {}

  onInit(){

  }
 
  first(){
    this.exemplo = false;
  }
  second(){
    this.exemplo = true;
  }
}
