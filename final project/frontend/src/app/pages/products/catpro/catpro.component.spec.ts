import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatproComponent } from './catpro.component';

describe('CatproComponent', () => {
  let component: CatproComponent;
  let fixture: ComponentFixture<CatproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
