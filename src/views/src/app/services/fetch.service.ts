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

  public checkoutBronzePlan(email: string): Observable<any> {
    return this.http.post<any>(`${this.API_ENDPOINT}/stripe/checkout/bronze`, email)
  }
}
