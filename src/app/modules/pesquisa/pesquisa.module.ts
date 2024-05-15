import { NgModule } from '@angular/core';

import { PesquisaRoutingModule } from './pesquisa-routing.module';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { SharedModule } from '../../shared/shared.module';
import { ListagemSetsComponent } from './components/listagem-sets/listagem-sets.component';
import { ListagemCartasComponent } from './components/listagem-cartas/listagem-cartas.component';

@NgModule({
  declarations: [
    PesquisaComponent,
    ListagemSetsComponent,
    ListagemCartasComponent,
  ],
  imports: [PesquisaRoutingModule, SharedModule],
})
export class PesquisaModule {}
