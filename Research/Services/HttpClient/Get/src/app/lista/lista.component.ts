import { Component, OnInit } from '@angular/core';
import { ListarService } from './listar.service';
import { Noticia } from './model/Noticia';

// Decorator - Caracteristicas do Objeto
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

// Classe - Coportamento do Objeto
export class ListaComponent implements OnInit {

// Propriedade/Atributo
  new: Noticia[] = [];

// 1ª
// Método/Função
// O constructor é o primeiro método a ser chamado quando
// a função que o contém é instanciada
 constructor( private service: ListarService ) { }
// Exemplo de herança de métodos

// 3º 
// Exemplo de encapsulamento, onde os métodos de ListarService
// só poderão ser utilizados por funções, já que os mesmos são
// privados

// Método/Função 
// O OnInit só é executado após da inicialização do contructor.
// Além disso, faz parte do ciclo de vida do componente
  ngOnInit(): void {
    this.Lista();
  }

  // 2º 
  // Método/Função
  // Exemplo de Polimorfismo, onde a função list() está sendo usada,
  // porém, de uma forma diferente da sua funcionalidade original
  Lista() {
    this.service.list()
    .subscribe((data : Noticia[]) => {
      this.new = data;
    })
  }
}
