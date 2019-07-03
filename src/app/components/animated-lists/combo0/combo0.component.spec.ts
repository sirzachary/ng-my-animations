import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Combo0Component } from './combo0.component';

describe('Combo0Component', () => {
  let component: Combo0Component;
  let fixture: ComponentFixture<Combo0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Combo0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Combo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
