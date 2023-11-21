import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMComponent } from './settings-m.component';

describe('SettingsMComponent', () => {
  let component: SettingsMComponent;
  let fixture: ComponentFixture<SettingsMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsMComponent]
    });
    fixture = TestBed.createComponent(SettingsMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
