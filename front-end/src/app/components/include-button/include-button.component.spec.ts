import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludeButtonComponent } from './include-button.component';

describe('IncludeButtonComponent', () => {
  let component: IncludeButtonComponent;
  let fixture: ComponentFixture<IncludeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncludeButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncludeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
