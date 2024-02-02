import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudropdownComponent } from './menudropdown.component';

describe('MenudropdownComponent', () => {
  let component: MenudropdownComponent;
  let fixture: ComponentFixture<MenudropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenudropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenudropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
