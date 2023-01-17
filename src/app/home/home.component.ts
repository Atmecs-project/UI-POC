import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emplist: any =[];
  constructor(public sharedService: SharedServiceService) { }
  ngOnInit(): void {
    
  }
  addNewEmployee()
  {
    
  }
}
