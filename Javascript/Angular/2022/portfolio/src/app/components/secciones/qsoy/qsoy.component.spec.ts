import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QsoyComponent } from './qsoy.component';

describe('QsoyComponent', () => {
  let component: QsoyComponent;
  let fixture: ComponentFixture<QsoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QsoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QsoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
