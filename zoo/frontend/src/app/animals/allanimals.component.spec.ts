import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllanimalsComponent } from './allanimals.component';

describe('AllanimalsComponent', () => {
  let component: AllanimalsComponent;
  let fixture: ComponentFixture<AllanimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllanimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllanimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
