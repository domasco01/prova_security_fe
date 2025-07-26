import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { Credenziali } from '../interfacce/credenziali.interface';
import { Observable } from 'rxjs';
import { LoginResponse } from '../interfacce/login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = environment.baseUrl + '/auth/login'
  
  constructor(private httpClient: HttpClient) { }

  public eseguiLogin( credenziali : Credenziali): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.url, credenziali);


  }
}
