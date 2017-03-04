import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesProfessionComponent } from './services-profession.component';

describe('ServicesProfessionComponent', () => {
  let component: ServicesProfessionComponent;
  let fixture: ComponentFixture<ServicesProfessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesProfessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
