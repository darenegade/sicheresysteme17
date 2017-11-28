import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnclosureComponent } from './enclosure.component';

describe('EnclosureComponent', () => {
  let component: EnclosureComponent;
  let fixture: ComponentFixture<EnclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
