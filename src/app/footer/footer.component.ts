import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor( public sharedService : SharedServiceService){}
}
