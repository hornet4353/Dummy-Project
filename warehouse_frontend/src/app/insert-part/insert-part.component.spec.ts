import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPartComponent } from './insert-part.component';

describe('InsertPartComponent', () => {
  let component: InsertPartComponent;
  let fixture: ComponentFixture<InsertPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
