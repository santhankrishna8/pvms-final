import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeBiteComponent } from './snake-bite.component';

describe('SnakeBiteComponent', () => {
  let component: SnakeBiteComponent;
  let fixture: ComponentFixture<SnakeBiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnakeBiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnakeBiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
