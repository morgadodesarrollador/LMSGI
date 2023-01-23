import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMapaComponent } from './footer-mapa.component';

describe('FooterMapaComponent', () => {
  let component: FooterMapaComponent;
  let fixture: ComponentFixture<FooterMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
