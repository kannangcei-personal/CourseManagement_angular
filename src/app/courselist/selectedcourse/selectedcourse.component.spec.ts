import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedcourseComponent } from './selectedcourse.component';

describe('SelectedcourseComponent', () => {
  let component: SelectedcourseComponent;
  let fixture: ComponentFixture<SelectedcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedcourseComponent]
    });
    fixture = TestBed.createComponent(SelectedcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
