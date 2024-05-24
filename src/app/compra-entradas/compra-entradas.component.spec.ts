import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraEntradasComponent } from './compra-entradas.component';

describe('CompraEntradasComponent', () => {
  let component: CompraEntradasComponent;
  let fixture: ComponentFixture<CompraEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompraEntradasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompraEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
