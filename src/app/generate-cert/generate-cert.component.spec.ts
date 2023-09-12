import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCertComponent } from './generate-cert.component';

describe('GenerateCertComponent', () => {
  let component: GenerateCertComponent;
  let fixture: ComponentFixture<GenerateCertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateCertComponent]
    });
    fixture = TestBed.createComponent(GenerateCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
