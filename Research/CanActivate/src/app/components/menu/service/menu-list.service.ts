import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  constructor( private http: HttpClient) { }

  listar() :Observable<Usuario[]>{
    return this.http.get<Usuario[]>('https://olinda-tech.top/angular-teste/noticia/listar')
  }
}
