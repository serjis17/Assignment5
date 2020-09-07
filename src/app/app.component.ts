import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name:string="Amazon";
  isAdded:boolean=false;
  recentItem:string;
  display($event)
  {
     this.recentItem=$event
     this.isAdded=true;
  }

}
