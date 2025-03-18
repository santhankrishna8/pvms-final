import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokenbonesComponent } from './brokenbones.component';

describe('BrokenbonesComponent', () => {
  let component: BrokenbonesComponent;
  let fixture: ComponentFixture<BrokenbonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokenbonesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrokenbonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
