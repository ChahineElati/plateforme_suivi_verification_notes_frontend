import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Copie } from '../models/copie';

@Injectable({
  providedIn: 'root'
})
export class CopieService {
  private apiUrl = 'http://localhost:8081/SpringMVC/servlet/api';

  constructor(private http: HttpClient) { }

  getCopiesForPaquet(paquetId: number): Observable<Copie[]> {
    return this.http.get<Copie[]>(`${this.apiUrl}/copie/paquet/${paquetId}`);
  }
}
