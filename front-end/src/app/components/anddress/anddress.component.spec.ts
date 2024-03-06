import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnddressComponent } from './anddress.component';

describe('AnddressComponent', () => {
  let component: AnddressComponent;
  let fixture: ComponentFixture<AnddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
