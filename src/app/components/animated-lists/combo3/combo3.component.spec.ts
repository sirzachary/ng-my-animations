import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Combo3Component } from './combo3.component';

describe('Combo3Component', () => {
  let component: Combo3Component;
  let fixture: ComponentFixture<Combo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Combo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Combo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
