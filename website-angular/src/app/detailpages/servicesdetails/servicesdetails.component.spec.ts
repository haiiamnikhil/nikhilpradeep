import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesdetailsComponent } from './servicesdetails.component';

describe('ServicesdetailsComponent', () => {
  let component: ServicesdetailsComponent;
  let fixture: ComponentFixture<ServicesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
