import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Noticia } from './model/Noticia'


// Decorator
@Injectable({
  providedIn: 'root'
})

// Classe - Coportamento do Objeto
export class ListarService {

// Método/Função
// Exemplo de encapsulamento, onde os métodos de ListarService
// só poderão ser utilizados por funções
  constructor( private http: HttpClient ) {}

// Método/Função
  list():Observable<Noticia[]> {
    return this.http.get<Noticia[]>('https://olinda-tech.top/angular-teste/noticia/listar')
  }
  
}
