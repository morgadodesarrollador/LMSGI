import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajosComponent } from './trabajos.component';

describe('TrabajosComponent', () => {
  let component: TrabajosComponent;
  let fixture: ComponentFixture<TrabajosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
