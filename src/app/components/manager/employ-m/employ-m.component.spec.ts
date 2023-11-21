import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployMComponent } from './employ-m.component';

describe('EmployMComponent', () => {
  let component: EmployMComponent;
  let fixture: ComponentFixture<EmployMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployMComponent]
    });
    fixture = TestBed.createComponent(EmployMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
