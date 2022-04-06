import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionlistdetailsComponent } from './missionlistdetails.component';

describe('MissionlistdetailsComponent', () => {
  let component: MissionlistdetailsComponent;
  let fixture: ComponentFixture<MissionlistdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionlistdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionlistdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
