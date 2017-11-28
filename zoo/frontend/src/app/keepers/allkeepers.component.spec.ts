import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllkeepersComponent } from './allkeepers.component';

describe('AllenclosuresComponent', () => {
  let component: AllkeepersComponent;
  let fixture: ComponentFixture<AllkeepersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllkeepersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllkeepersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
