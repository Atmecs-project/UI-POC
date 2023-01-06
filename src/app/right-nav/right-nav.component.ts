import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.css']
})
export class RightNavComponent implements OnInit{
  @Input() rsideNavStatus:boolean=false;

  rlist=[
  {
    number:'1',
    name:'Information',
    icon:'fa-solid fa-house',
  },
  {
    number:'2',
    name:'Analytics',
    icon:'fa-solid fa-chart-line',
  },
  {
    number:'3',
    name:'Orders',
    icon:'fa-solid fa-cart-shopping',
  },
  {
    number:'4',
    name:'Bills',
    icon:'fa-solid fa-box',
  },
  {
    number:'5',
    name:'Settings',
    icon:'fa-solid fa-gear',
  }
];
constructor(){

}
ngOnInit(): void {}

}

