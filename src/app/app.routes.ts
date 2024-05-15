import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pesquisa',
      },
      {
        path: 'pesquisa',
        pathMatch: 'full',
        loadChildren: () =>
          import('./modules/pesquisa/pesquisa.module').then(
            (m) => m.PesquisaModule
          ),
      },
];
