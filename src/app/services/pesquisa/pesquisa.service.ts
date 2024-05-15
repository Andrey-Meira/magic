import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from '../../models/cards.model';
import { environment } from '../../enviroment/environment';
import { Sets } from '../../models/sets.model';

@Injectable({
  providedIn: 'root',
})
export class PesquisaService {
  constructor(private http: HttpClient) {}

  getSets(nome: string, bloco: string): Observable<Sets> {
    let params = '';
    if (nome) {
      params = nome + '|';
    }
    params += bloco;
    return this.http.get<Sets>(`${environment.baseUrl}/sets?name=${params}`);
  }
}
