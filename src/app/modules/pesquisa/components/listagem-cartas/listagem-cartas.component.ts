import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../../models/card.model';
import { listAnimation } from '../../../../animations/list.animation';

@Component({
  selector: 'app-listagem-cartas',
  templateUrl: './listagem-cartas.component.html',
  styleUrl: './listagem-cartas.component.scss',
  animations: [listAnimation]
})
export class ListagemCartasComponent {
  @Input() cartas: Card[] = [];

  public arrayCores: string[] = ['U', 'B', 'R', 'G'];

  _getImge(cor: string): string {
    let url = cor;
    switch (cor) {
      case 'U':
        url =
          'http://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/9/9f/U.svg/revision/latest/scale-to-width-down/15?cb=20160121092256';
        break;

      case 'B':
        url =
          'http://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/2/2f/B.svg/revision/latest/scale-to-width-down/15?cb=20160125093423';
        break;

      case 'R':
        url =
          'http://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/8/87/R.svg/revision/latest/scale-to-width-down/15?cb=20160125094913';
        break;

      case 'G':
        url =
          'http://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/8/88/G.svg/revision/latest/scale-to-width-down/15?cb=20160125094907';
        break;
    }

    return url;
  }
}
