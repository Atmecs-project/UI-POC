import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../services/employee-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emplist: any =[];
  constructor(private empData: EmployeeDataService) { }
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
