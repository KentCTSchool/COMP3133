import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedHistoryComponent } from './booked-history.component';

describe('BookedHistoryComponent', () => {
  let component: BookedHistoryComponent;
  let fixture: ComponentFixture<BookedHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
