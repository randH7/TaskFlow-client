import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMComponent } from './project-m.component';

describe('ProjectMComponent', () => {
  let component: ProjectMComponent;
  let fixture: ComponentFixture<ProjectMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectMComponent]
    });
    fixture = TestBed.createComponent(ProjectMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
