import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissionlistdetailsComponent } from './missionlistdetails/missionlistdetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'missionlist', pathMatch:'full' },
  { path :'missionlist', component: MissionlistComponent},
  { path :'missionlist/:flight_number', component: MissionlistdetailsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})        
export class AppRoutingModule { }
