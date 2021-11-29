import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrodejogosComponent } from './cadastrodejogos.component';

describe('CadastrodejogosComponent', () => {
  let component: CadastrodejogosComponent;
  let fixture: ComponentFixture<CadastrodejogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrodejogosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrodejogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
