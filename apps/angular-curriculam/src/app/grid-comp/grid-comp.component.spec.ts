import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridCompComponent } from './grid-comp.component';

describe('GridCompComponent', () => {
  let component: GridCompComponent;
  let fixture: ComponentFixture<GridCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridCompComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GridCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
