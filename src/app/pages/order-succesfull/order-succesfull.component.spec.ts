import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSuccesfullComponent } from './order-succesfull.component';

describe('OrderSuccesfullComponent', () => {
  let component: OrderSuccesfullComponent;
  let fixture: ComponentFixture<OrderSuccesfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSuccesfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSuccesfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
