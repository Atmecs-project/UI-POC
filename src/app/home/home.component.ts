import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emplist: any =[];
  constructor(private empData: SharedServiceService) { }
  ngOnInit(): void {
    this.empData.employees().subscribe((data) => {
      this.emplist=data;
      console.log(this.emplist);
    });
  }
  addNewEmployee()
  {
    
  }
}
