import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Combo2Component } from './combo2.component';

describe('Combo2Component', () => {
  let component: Combo2Component;
  let fixture: ComponentFixture<Combo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Combo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Combo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
