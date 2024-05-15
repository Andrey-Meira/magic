import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards } from '../../models/cards.model';
import { Observable } from 'rxjs';
import { environment } from '../../enviroment/environment';

@Injectable({
  providedIn: 'root',
})
export class SetsService {
  constructor(private http: HttpClient) {}

  setBooster(id: string): Observable<Cards> {
    return this.http.get<Cards>(`${environment.baseUrl}/sets/${id}/booster`);
  }
}
