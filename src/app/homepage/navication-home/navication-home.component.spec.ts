import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavicationHomeComponent } from './navication-home.component';

describe('NavicationHomeComponent', () => {
  let component: NavicationHomeComponent;
  let fixture: ComponentFixture<NavicationHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavicationHomeComponent]
    });
    fixture = TestBed.createComponent(NavicationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
