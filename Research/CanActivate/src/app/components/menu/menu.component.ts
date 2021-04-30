import { Component, OnInit } from '@angular/core';
import { MenuListService } from './service/menu-list.service';
import { NgxSpinnerService } from "ngx-spinner";

import { Usuario } from '../../models/usuario';

import { Idade } from '../../models/idade';

import { Cargo } from '../../models/cargo';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userName: string;
 
  //Idades

  older: Idade[] = [];
  younger: Idade[] = [];
  outSider: Idade[] = [];
  
  //Cargos

  arq: Cargo[] = [];
  lider: Cargo[] = [];
  intern: Cargo[] = [];
  maneger: Cargo[] = [];
  
 
  userModel: Usuario[] = [];
  total: number = 0;

  constructor( private service: MenuListService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

   this.userName = localStorage.getItem("nome");
   this.listarUsuarios();
  }

 listarUsuarios() {
  this.spinner.show('loading');
   this.service.listar()
   .subscribe((data: Usuario[]) => {
     
    this.userModel = data;
    this.total = this.userModel.length;
    this.spinner.hide('loading'); 
   })
   .add(() => {
     this.retornaDadosUsuario();
   })
 }

retornaDadosUsuario() {

  for (let i = 0; i <=10 ; i++) {

    let userInfo = this.userModel[i]

    let splitValue = userInfo.titulo.split(' ');
    let descricao = userInfo.descricao.split(' ');

     //*************************************************
    // ROTINA DE VALIDAÇÕES DAS IDADES E DAS DESCRIÇÕES
    //*************************************************

    if(Number(splitValue[2]) >= 28 && descricao[0] === "Faz") {

      if(splitValue[4] && !splitValue[5]) {
        this.older.push({nome: splitValue[0] + " " + splitValue[1], idade: splitValue[2], cargo: splitValue[3] + " " + splitValue[4]});
      }
      else if(splitValue[4] && splitValue[5]) {
        this.older.push({nome: splitValue[0] + " " + splitValue[1], idade: splitValue[2], cargo: splitValue[3] + " " + splitValue[4] + " " + splitValue[5]});
      }
      else {
        this.older.push({nome: splitValue[0] + " " + splitValue[1], idade: splitValue[2], cargo: splitValue[3]});
      }
    }

    else if (Number(splitValue[2]) < 28 && descricao[0] === "Faz") {

      if(splitValue[4] && !splitValue[5]) {
        this.younger.push({nome: splitValue[0] + " " + splitValue[1], idade: splitValue[2], cargo: splitValue[3] + " " + splitValue[4]});
      }
      else if(splitValue[4] && splitValue[5]) {
        this.younger.push({nome: splitValue[0] + " " + splitValue[1], idade: splitValue[2], cargo: splitValue[3] + " " + splitValue[4] + " " + splitValue[5]});
      }
      else {
        this.younger.push({nome: splitValue[0] + " " + splitValue[1], idade: splitValue[2], cargo: splitValue[3]});
      }
    }

    else {

      if(splitValue[4] && !splitValue[5]) {
        this.outSider.push({nome: splitValue[0] + " " + splitValue[1], idade: splitValue[2], cargo: splitValue[3] + " " + splitValue[4]});
      }
      else if(splitValue[4] && splitValue[5]) {
        this.outSider.push({nome: splitValue[0] + " " + splitValue[1], idade: splitValue[2], cargo: splitValue[3] + " " + splitValue[4] + " " + splitValue[5]});
      }
      else {
        this.outSider.push({nome: splitValue[0] + " " + splitValue[1], idade: splitValue[2], cargo: splitValue[3]});
      }
    }
 
    //*******************************
    // ROTINA DE INSERÇÃO DOS CARGOS
    //******************************

    if (splitValue[3] === "Arquiteto" && descricao[0] === "Faz") {
      this.arq.push({nome: splitValue[0] + " " + splitValue[1]});
    }
    else if (splitValue[3] === "Líder" && descricao[0] === "Faz") {
      this.lider.push({nome: splitValue[0] + " " + splitValue[1]});
    }
    else if(splitValue[3] === "Estagiária" || splitValue[3] === "Estagiário" && descricao[0] === "Faz" ) {
      this.intern.push({nome: splitValue[0] + " " + splitValue[1]});
    }
    else if (splitValue[3] === "Gerebte" && descricao[0] === "Faz" ) {
      this.maneger.push({nome: splitValue[0] + " " + splitValue[1]});
    }
  
  }
}

// this.definineTipoDado(this.dadosSeparados);

// definineTipoDado(dadosSeparados: String[]) {

//   let nome = dadosSeparados.slice(0,2);
//   let idade = dadosSeparados.slice(2,3);
//   let cargo = dadosSeparados.slice(3,6);

//   this.nome = nome;
//   this.idade = idade;
//   this.cargo = cargo;

//   console.log("Nome: " + nome);
//   console.log("Idade: " + idade);
//   console.log("Cargo: " + cargo);

// }

}
