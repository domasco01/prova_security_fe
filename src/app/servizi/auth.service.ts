import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { Credenziali } from '../interfacce/credenziali.interface';
import { Observable } from 'rxjs';
import { LoginResponse } from '../interfacce/login-response.interface';
import { Registrazione } from '../interfacce/registrazione.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlLogin = environment.baseUrl + '/auth/login'
  private urlRegistrazione = environment.baseUrl + '/auth/register'
  
  constructor(private httpClient: HttpClient) { }

  public eseguiLogin( credenziali : Credenziali): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.urlLogin, credenziali);
  }

  public eseguiRegistrazione( dati : Registrazione): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.urlRegistrazione, dati);
  }
}
