import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  // private REST_API_END_POINT = "https://api.spacexdata.com/v3/launches";
  missionList: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllFlights().subscribe(flights => {
      // console.log(flights);
      this.missionList = flights;
    })

  }
}
