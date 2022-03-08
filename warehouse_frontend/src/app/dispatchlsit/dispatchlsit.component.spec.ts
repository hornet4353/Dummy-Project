import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchlsitComponent } from './dispatchlsit.component';

describe('DispatchlsitComponent', () => {
  let component: DispatchlsitComponent;
  let fixture: ComponentFixture<DispatchlsitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatchlsitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchlsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
