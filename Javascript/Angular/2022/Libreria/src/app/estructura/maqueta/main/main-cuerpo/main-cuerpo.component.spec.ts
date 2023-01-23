import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCuerpoComponent } from './main-cuerpo.component';

describe('MainCuerpoComponent', () => {
  let component: MainCuerpoComponent;
  let fixture: ComponentFixture<MainCuerpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCuerpoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
