import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContactoComponent } from './footer-contacto.component';

describe('FooterContactoComponent', () => {
  let component: FooterContactoComponent;
  let fixture: ComponentFixture<FooterContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
