import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'life-cycle-hook';
  data = 0;


  constructor(){
      console.log("constructor")
  }

  ngOnInit(){
      console.log("ngOnInit")
  }

  ngDoCheck(){
    console.log("DO CHECK")
  }

  show(){

    this.data = this.data + 1;

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }
}
