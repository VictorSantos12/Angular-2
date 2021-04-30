import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Noticia } from '../lista/model/Noticia'

@Injectable({
  providedIn: 'root'
})
export class CriarService {

  constructor( private http: HttpClient ) { }

  private api = 'https://olinda-tech.top/angular-teste/noticia/cadastro'

  criar(noticia: Noticia):Observable<any>{
    return this.http.post<any>(this.api, noticia);
  }
}
