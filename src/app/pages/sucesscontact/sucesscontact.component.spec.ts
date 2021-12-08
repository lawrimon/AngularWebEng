import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucesscontactComponent } from './sucesscontact.component';

describe('SucesscontactComponent', () => {
  let component: SucesscontactComponent;
  let fixture: ComponentFixture<SucesscontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucesscontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucesscontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
