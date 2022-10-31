import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodctComponent } from './addprodct.component';

describe('AddprodctComponent', () => {
  let component: AddprodctComponent;
  let fixture: ComponentFixture<AddprodctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprodctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprodctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
