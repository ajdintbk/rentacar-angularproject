import { Component, OnInit } from '@angular/core';
declare var $:JQueryStatic;

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  title = "audi";
  constructor() { }

  ngOnInit(): void {
  }

  myFunc(){
    this.title=$("#newTitle").val();
  }

}
