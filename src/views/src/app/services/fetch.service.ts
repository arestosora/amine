import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService extends AppSettings {
  constructor(private readonly http: HttpClient) {
    super();
  }

  public checkout(plan: string, email: string): Observable<unknown> {
    return this.http.post<unknown>(`${this.API_ENDPOINT}/stripe/${plan}`, email)
  }
}
