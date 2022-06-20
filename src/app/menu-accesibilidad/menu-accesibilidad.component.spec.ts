import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAccesibilidadComponent } from './menu-accesibilidad.component';

describe('MenuAccesibilidadComponent', () => {
  let component: MenuAccesibilidadComponent;
  let fixture: ComponentFixture<MenuAccesibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAccesibilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAccesibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
