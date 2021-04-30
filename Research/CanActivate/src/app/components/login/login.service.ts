import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Classes
import { Login } from './model/login';
import { userCallBack } from './model/user'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }

  logIn(data: Login) :Observable<userCallBack>{
    return this.http.post<userCallBack>('http://fopag-desenv.ayugate.com:2280/api/login', data)
  }
}
