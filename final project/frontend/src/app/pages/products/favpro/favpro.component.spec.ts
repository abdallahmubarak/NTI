import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavproComponent } from './favpro.component';

describe('FavproComponent', () => {
  let component: FavproComponent;
  let fixture: ComponentFixture<FavproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
