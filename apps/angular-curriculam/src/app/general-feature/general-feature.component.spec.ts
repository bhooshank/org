import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralFeatureComponent } from './general-feature.component';

describe('GeneralFeatureComponent', () => {
  let component: GeneralFeatureComponent;
  let fixture: ComponentFixture<GeneralFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
