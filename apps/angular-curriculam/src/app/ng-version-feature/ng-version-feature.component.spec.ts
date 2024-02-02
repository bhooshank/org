import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgVersionFeatureComponent } from './ng-version-feature.component';

describe('NgVersionFeatureComponent', () => {
  let component: NgVersionFeatureComponent;
  let fixture: ComponentFixture<NgVersionFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgVersionFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgVersionFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
