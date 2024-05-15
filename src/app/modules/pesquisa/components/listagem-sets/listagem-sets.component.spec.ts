import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemSetsComponent } from './listagem-sets.component';

describe('ListagemSetsComponent', () => {
  let component: ListagemSetsComponent;
  let fixture: ComponentFixture<ListagemSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemSetsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListagemSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
