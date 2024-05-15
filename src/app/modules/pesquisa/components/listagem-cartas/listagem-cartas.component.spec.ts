import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCartasComponent } from './listagem-cartas.component';

describe('ListagemCartasComponent', () => {
  let component: ListagemCartasComponent;
  let fixture: ComponentFixture<ListagemCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemCartasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
