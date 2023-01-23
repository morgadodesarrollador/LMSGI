import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialesComponent } from './sociales.component';

describe('SocialesComponent', () => {
  let component: SocialesComponent;
  let fixture: ComponentFixture<SocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
