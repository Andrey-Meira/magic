import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PesquisaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesquisaRoutingModule {}
