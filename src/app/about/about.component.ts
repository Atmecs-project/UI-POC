import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
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
