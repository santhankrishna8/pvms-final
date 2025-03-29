import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicVideoListComponent } from './basic-video-list.component';

describe('BasicVideoListComponent', () => {
  let component: BasicVideoListComponent;
  let fixture: ComponentFixture<BasicVideoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicVideoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
