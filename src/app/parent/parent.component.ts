import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  user = {
    name:"Alex"
  }

  constructor() { }

  ngOnInit(): void {
  }
  updateUser(){
    this.user.name = "ted"
  }

}
