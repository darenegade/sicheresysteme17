import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalcreateComponent } from './animalcreate.component';

describe('AnimalcreateComponent', () => {
  let component: AnimalcreateComponent;
  let fixture: ComponentFixture<AnimalcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
