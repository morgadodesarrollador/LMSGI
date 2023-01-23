import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUsuarioComponent } from './header-usuario.component';

describe('HeaderUsuarioComponent', () => {
  let component: HeaderUsuarioComponent;
  let fixture: ComponentFixture<HeaderUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
