import { Component, OnInit } from '@angular/core';
import { PesquisaService } from '../../../../services/pesquisa/pesquisa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Set } from '../../../../models/set.model';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Bloco {
  nome: string;
}

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.scss',
})
export class PesquisaComponent implements OnInit {
  public blocos: Bloco[] = [
    {
      nome: 'Amonkhet',
    },
    {
      nome: 'Ixalan',
    },
    {
      nome: 'Zendikar',
    },
    {
      nome: 'Ravnica',
    },
    {
      nome: 'Onslaught',
    },
  ];

  public sets: Set[] = [];
  public formGroup!: FormGroup;

  public loading: boolean = false;

  constructor(
    private service: PesquisaService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this._buildForm();
  }

  submitForm(): void {
    this.sets = [];
    if (!this.formGroup.valid) {
      return;
    }

    this.loading = true;

    const { nome, bloco } = this.formGroup.value;

    this.service.getSets(nome, bloco).subscribe({
      next: (response) => {
        this.sets = response.sets;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this._snackBar.open(
          'Houve um erro ao tentar pesquisar os Sets, por favor tente novamente mais tarde :(',
          'Ok'
        );
      },
    });
  }

  private _buildForm(): void {
    this.formGroup = this.formBuilder.group({
      nome: [null],
      bloco: [null, Validators.required],
    });
  }
}
