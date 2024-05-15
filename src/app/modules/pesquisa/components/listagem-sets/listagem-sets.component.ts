import { Component, Input, OnInit } from '@angular/core';
import { Set } from '../../../../models/set.model';
import { SetsService } from '../../../../services/sets/sets.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from '../../../../models/card.model';
import { listAnimation } from '../../../../animations/list.animation';

@Component({
  selector: 'app-listagem-sets',
  templateUrl: './listagem-sets.component.html',
  styleUrl: './listagem-sets.component.scss',
  animations: [listAnimation],
})
export class ListagemSetsComponent {
  @Input() sets: Set[] = [];

  public cartas: Card[] = [];
  public loading: boolean = false;

  constructor(private service: SetsService, private _snackBar: MatSnackBar) {}

  abrirPacote(code: string): void {
    this.cartas = [];
    this.loading = true;
    const maxCards = 30;

    const fetchCards = () => {
      this.service.setBooster(code).subscribe({
        next: (response) => {
          this.cartas = this.cartas.concat(this._filterCards(response.cards));
          if (this.cartas.length == maxCards) {
            this.loading = false;
            return;
          } else if (this.cartas.length > maxCards) {
            this.cartas.splice(maxCards);
            this.loading = false;
            return;
          }

          fetchCards();
        },
        error: (err) => {
          this.loading = false;
          this._snackBar.open(
            'Houve um erro ao tentar gerar seu booster, por favor tente novamente mais tarde :(',
            'Ok'
          );
        },
      });
    };

    fetchCards();
  }

  private _filterCards(cartas: Card[]): Card[] {
    return cartas.filter((card) => card.types.includes('Creature'));
  }
}
