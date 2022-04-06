import { Component } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '101266723-lab-test2-comp3133';
  missionList: any;

  constructor(private dataService: DataService){

  }

  btnClickGetFlights(){

  }
}
