import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-missionlistdetails',
  templateUrl: './missionlistdetails.component.html',
  styleUrls: ['./missionlistdetails.component.css']
})

export class MissionlistdetailsComponent implements OnInit {

  // private REST_API_END_POINT = "https://api.spacexdata.com/v3/launches?flight_number="

  missionDetails: any
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService, private httpClient: HttpClient) { }

  ngOnInit(): void {
      let id = this.activatedRoute.snapshot.paramMap.get('flight_number')
      console.log(id)

      this.dataService.getMissionByID(id).subscribe((response: any) => {
        // console.log(response)
        this.missionDetails = response
        console.log(this.missionDetails[0])
      })
  }

}
