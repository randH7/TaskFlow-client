import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsMComponent } from './project-details-m.component';

describe('ProjectDetailsMComponent', () => {
  let component: ProjectDetailsMComponent;
  let fixture: ComponentFixture<ProjectDetailsMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDetailsMComponent]
    });
    fixture = TestBed.createComponent(ProjectDetailsMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
