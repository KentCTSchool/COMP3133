import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionlistComponent } from './missionlist.component';

describe('MissionlistComponent', () => {
  let component: MissionlistComponent;
  let fixture: ComponentFixture<MissionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
