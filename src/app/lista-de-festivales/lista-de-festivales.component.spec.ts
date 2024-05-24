import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeFestivalesComponent } from './lista-de-festivales.component';

describe('ListaDeFestivalesComponent', () => {
  let component: ListaDeFestivalesComponent;
  let fixture: ComponentFixture<ListaDeFestivalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeFestivalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaDeFestivalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
