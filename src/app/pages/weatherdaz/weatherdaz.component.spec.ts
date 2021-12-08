import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherdazComponent } from './weatherdaz.component';

describe('WeatherdazComponent', () => {
  let component: WeatherdazComponent;
  let fixture: ComponentFixture<WeatherdazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherdazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherdazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
