<div align="center">
 <img src="https://user-images.githubusercontent.com/61476935/116641764-c6508200-a943-11eb-969f-54726018142e.png">
</div>
<br>
<img src="https://img.shields.io/static/v1?label=Angular&message=Framework&color=red&style=for-the-badge&logo=Angular"/>

  <h5>O Angular é um framework Typescript para desenvolvimento no client-side.
  Com uma estrutura que permite uma grande diversidade de usos, é bastante comum
  encontrar o Angular, em alguma de suas versões, presente tanto em single page
  aplications quanto em apps mobile</h5> 
  
  ><h4>Para mais informações sobre o TypeScript recomendo: https://github.com/VictorSantos12/Typescript</h4>
  
  <h4>Docunentação Oficial: https://angular.io/docs</h4>

   ><h5>Intalação:  npm install -g @angular/cli</h5>
   ><h5>Novo Projeto: ng new name</h5>
   ><h5>Iniciar Servidor de Desenvolvimento: cd name => ng serve --open</h5>
     	
  <h4>Caracteristicas Básicas</h4>
     
   ><h5>Utiliza Typescript;<h5>
   ><h5>Utiliza HTML e obedece a ordem hierárquica do DOM;</h5>
   ><h5>Possui uma CLI própria para garantir uma boa interação com o desenvolvedor;
   ><h5>Utiliza uma estrutura de Componentes com uma forte presença da orientação a objetos;</h5>

  <h2>Components</h2>
  
  <h5>Criar um novo Componente</h5>
  
   ><h5>ng g c + nome</h5>
 
 <h5>Os Components são a estrutura base de uma aplicação em Angular, cada componente consiste em:</h5>
  
   ><h5>Um template HTML que define a marcação do que será renderizado no componente</h5>
   ><h5>Uma classe typescript que define o comportamento do componente</h5>
   ><h5>Um CSS que define o style do componente</h5>
   ><h5>E de forma opcional um arquivo CSS que determina funções específicas</h5>
  
 <h4>Estrutura básica de um component:</h4>
                 
    import { Component } from '@angular/core'
                      
       @Component({
       
       Selector: 'my-component',
       templateUrl: './my-coponent.component.html',
	   styleUrls: ['./my-component.component.css']
	   
                 })
       export class MyComponent {
       
	   constructor() {}
	
 	   onInit() {  
          
          
              }
       }

<h3>@Component</h3>

   ><h5>Decorators são funções utilizadas tanto por componentes e modules quanto por services. 
   >Eles definem seu tipo e disponibilizam a conexão com dados, estrutura e lógica, sendo algo
   >como a estrutura física do componente, identificando a classe imediatamente a baixo como um
   >componente</h5>

<h3>Seletor</h3>

   ><h5>Um seletor define a hieranquia de uso das propriedades de um componente dentro de outro, o referenciando
   >com o uso de uma tag html que leva a marcação do selector. O componente que carrega o seletor de outro passa
   >a ser "pai" do mesmo</h5>

    Ex: <my-component></my-compinent>

<h3>TemplateUrl</h3>

   ><h5>Estrutura de marcação (HTML) do componente</h5>
   
<h3>StyleUrls</h3>

   ><h5>StyleSheet do compnente</h5>
   
<h3>Class</h3>

 <h5>Sendo a parte mais importante e complexa do component, a classe define todo e qualquer comportamento que um componente tem
 ou virá a ter</h5>
	
    export class MyComponent {
      constructor() {}
      
      ngOnInit() {  
          
          }
       }
       
 <h4>Constructor()</h4>
 
 ><h5>O constructor é responsável por tornar visível ao componente uma dependência ou serviço, tornando disponíveis suas 
 >funcionalidades</h5>
 
 <h4>ngOnInit()</h4>
 
 ><h5>Tem a função de executar com prioridade seu conteúdo, já que o mesmo é o primeiro método a ser executado quando a classe que 
 >o contém é chamada</h5>
 
<h4>Propriedades(Atributos)</h4>

<h5>Uma propriedade é uma variável a qual se pode atribuir um tipo, seja esse number, string, boolean ou array, além de um valor correspondente
a esse tipo, sendo pissível modificar tal valor dentro de uma rotina. Um detalhe importante é que as propriedades de um componente devem
ser declaradas e tipadas imediatamente após a declaração da classe que o representa, precedendo seu constructor.</h5>

     export class MyComponent { 
     
     propriedadeBoolean: boolean = false;
     propriedadeNumber: number;
     propriedadeArray: Exemplo[] = [];
     
     contructor () {}
   
     ngOnInit () {
   
     }
    }
    
    
<h5>Como dito anteriormente, o valor de uma propriedade pode ser alterado dentro de uma estrutura lógica. Essa estrutura, normalmente definida
como uma rotina, método ou função, executa determinado trecho de código quando chamada</h5>
   
<h4>Métodos(Funções)</h4>

<h5>Há formas distintas de executar um método, este podendo ter sua chamada atribuída a um evento, ou mesmo ser declarada dentro de um outro
método. Um exemplo claro desse conceito é o ngOnInit, primeiro método a ser executado na chamada de uma classe. Exemplos de chamadas de um
método:</h5>
    
     <!--- Arquivo .HTML --->
    
      <button type="button" (click)="umaRotinaQualquer()">Chamar a rotina</button>
    
     //Arquivo .TS
    
      export class MinhasRotinas {
    
      umaRotinaQualquer() {
    	
        console.log("1º chamada executada");
        this.umaOutraRotina();
	
      }
    
      umaOutraRotina() {
      
        console.log("2º chamada executada");
	 
      }
     }
     
<h4>Tipagem de Métodos</h4>

<h1>Guia do Desenvolvedor</h1>

<h5>Por ter uma estrutura bastante rígida e bem formulada, o Angular possui a característica de ser bastante forte em
termos de conteúdo. Abaixo estão dispiníveis algumas das funcionalidades mais utilizadas no desenvolvimento de aplicação Web
com Angular</h5>
  
<h2>Angular Routing</h2>

<h5>Ao se iniciar um projeto no Angular CLI, uma das solicitações iniciais é definir se o projeto em questão irá utilizar 
o Angular Routes. O Angular Routes, ou apenas routes, é um dos módulos disponibilizados pelo Angular para que seja possível 
definir a navegação e entre outras características de uma aplicação</h5>

<h3>Index.html</h3>

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Lista</title>
      <base href="/">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" type="image/x-icon" href="favicon.ico">
    </head>
    <body>
      <app-root></app-root>
    </body>
    </html>

<h5>A estrutura de roteamento pode ser observada mesmo no index.html do projeto. Sendo este o principal arquivo de renderização
da aplicação, a tag base define que esta página, ou melhor, seu conteúdo será a primeira coisa a ser renderizada no loading. Porém,
a mesma não possui um conteúdo propriamente dito. Por padrão o Angular define que o app.componet será a primeira parte da aplicação
a ser renderizada, isso se confirma qunado o seletor referente ao app.component é o conteúdo do index.html</h5>

<h3>app.component.html</h3>

<h5>Senda o componente inicial do projeto, o app.component será o primeiro a ser renderizado. O mesmo é muito importante pois define
o acesso as demais rotas da aplicação. Veja:</h5>

<h5>Caso a instalação do pacote de rotas seja solicitada, uma pasta será acrescentada ao app do projeto, nela serão criadas as rotas
da aplicação. Mas antes disso, se o template do AppComponent for acessado, poderá ser vista a segunte tag:</h5>

     <router-outlet></router-outlet>

<h5>Essa tag define que esse componente irá receber a rota padrão('/') do aplicação, sendo carregada quando a página for acessada.
Isso também define que as demais rotas serão acessadas a partir dela</h5>

<h3>app-routing.modules.ts</h3>

    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';

    const routes: Routes = [

    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }

<h5>Nessa estrutura estão os imports necessários para que as rotas do sistemas sejam desenvolvidas.
Essas rotas serão criadas dentro da constante definida como routes, seguindo a ordem sintática abaixo:</h5>

 <h5>Crie os componentes referentes a cada rota</h5>
	   
    import { ExemploComponent } from './exemplo/exemplo.component'; 

<h5>Dentro da const, crie um path:'', referente ao caminho de acesso a essa parte da aplicação,
além do componete que será renderizado nessa rota</h5>
	
    { path: 'exemplo', component: ExemploComponent } 

<h5>Cada rota poderá ser acessada pela URL através do caminho definido, porém, o usuário nunca irá navegar dessa forma.
Uma forma de criar uma navegação mais aceitável é criando um link ou botão. Para isso, cria-se um deles no template anterior
ao que se deseja acessar. Veja:</h5>

<h3>app.component.html</h3>

    <button 
     type="button" 
     routerLink="exemplo">
     Exemplo
    </button>

<h5>Ao receber o routerLink, quando o botão for clicado o usuário será direcionado para o caminho/componente definido.</h5>


<h2>Directives</h2>

  <h5>As diretivas são estruturas de interação que criam uma nova definição da
  View com base em ações do usuário, isso só é possível garças a dinamicidade
  do Angular. No Angular há dois tipos distintos de diretivas:</h5>
               
<h4>Structural directives</h4>
   
   ><h5>Alteram o layout adicionando, removendo ou realocando
   >elementos DOM;</h5>

 <h4>Attribute directives</h4>
  
  ><h5>Alteram a aparencia ou o estado de elementos já existentes, sendo mais difundiadas por serem 
  >bem comuns ao JavaScript e portanto ao TypeScript. Elas são:</h5>
  
  <h3>*ngIf</h3>
  
  <h5>O *ngIf é a structural directive mais simple de se entender. Tendo como parâmetro um boolean ou qualquer
  valor, que possa ser alterado, normalmente associado a um parâmetro, pode tornar um trexo inteiro do DOM
  visível ou invisível</h5>
     
    //Primeiro
    <p *ngIf="true">
     A expressão recebe um true, portanto,
     o ngIf é verdadeiro, logo ele seria visível.
    </p>
    
    //Segundo
    <p *ngIf="false">
     A expressão recebe um true, portanto,
     o ngIf é verdadeiro, logo ele seria visível.
    </p>
  
  <h5>O valor de comparação é o mesmo, tendo esse um valor padrão. Quando o valor for um true, o primeiro trexo será visível,
  quado for false, este não será mais visível, dando assim lugar ao segundo trexo. Exemplo:</h5>
  
  <h5>exemplo.componet.html</h5>
  
    <div *ngIf="exemplo == true">Exemplo</div>
    <div *ngIf="exemplo == false">...</div>
    
    <button *ngIf="exemplo == true" (click)="first()">Esconder</button>
    <button *ngIf="exemplo == false" (click)="second()">Mostrar</button>
  
 <h5>exemplo.componet.ts</h5>
    
    ...
    
    exemplo: boolean = true;
    
    ...
    
    first() {
       this.exemplo = false    
    }
    second() {
       this.exemplo = true   
    }
    
    
 <h5>No exemplo acima há dois botões, ambos possuem um leitor de eventos de (click), sendo este propriedade
 do Angular. Isso define que quando o botão for clicado um método será chamado, este contendo uma nova definição da
 propriedade "exemplo". Essa propriedade é usada como parâmetro tanto para os botões quanto para as divs acima deles.</h5>
 
 <h4>Tornando mais Elegante</h4>
 
 <h5>Uma forma mais elegante de uso mantém a mesma estrutura lógica, porém, recebe uma definição sintática mais simples, 
 e portanto mais "elegante".</h5>
 
 <h5>exemplo.componet.html</h5>
 
     //Primeiro
    <p *ngIf="exemplo">
     A expressão recebe um true, portanto,
     o ngIf é verdadeiro, logo ele seria visível.
    </p>
    
    //Segundo
    <p *ngIf="!exemplo">
     A expressão recebe um true, portanto,
     o ngIf é verdadeiro, logo ele seria visível.
    </p>
    
  <h5>exemplo.componet.ts</h5>
    
    ...
    
    exemplo: boolean = true;
    
    ...
    
    first() {
       this.exemplo = false    
    }
    second() {
       this.exemplo = true   
    }
    
  <h5>Sendo exemplo o parâmetro de comparação, definir um *ngIf com "!exmplo" como argumento, se assemelha 
  a definir que esse trexo só irá ser visível caso o valor correspondente a exmplo seja falso. O mesmo 
  pode ser dito caso seja true</h5>
    
  <h3>ngClass</h3>
    
 <h3>*ngFor</h3>



<h2>Angular Forms</h2>

<h5>Tratar formularios de input do usuário é um pilar comum em muitas
aplicações. Aplicações usam forms para permitir que o usuário log, 
atualize seu perfil e para inserir informações restritas, além de
várias outras formas de tratamento de dados.</h5>

<h5>O Angular provê duas diferentes maneiras para tratar o input do
usuários através do froms, tendo cada um deles diferentes vantagens:</h5>

<h4>Template-driven</h4>

  ><h5>Fomulário criado e cofigurado no próprio HTML;</h5>
  ><h5>Validações declaradas no template HTML;</h5>
  ><h5>O FormGroup é deduzido de forma automática pelo próprio Angular;</h5>
  ><h5>Os valores do form são submetidos com o ngSubmit, ou pelo event listener
  >(submit) na tag form, a qual irá chamar um módulo de execução do form;</h5>


<h4>Reactive</h4>

  ><h5>O formulário é criado e cofigurado no componente.ts;</h5>
  ><h5>As validações são criadas dentro do componete.ts;</h5>
  ><h5>O Angular usa o FormGroup que é definido no componente.ts;</h5>
  ><h5>Não usa o ngSumit de forma obrigatória, podendo este ser substituído por um click event em um button do tipo submit;</h5>


<h5>Ambos capituram eventos nos inputs vindos da View, validam este input, criam um modelo de formulário e de dados, e então provêm um modo de
tartamento de mudanças. Entretanto, formulários que utilizam o template-driven tornam o processo de desenvolvimento um tanto lento. Outro ponto
é que, no final das contas, ambos irão agir como um formulário reativo, logo, o resultado final é o mesmo. Porém, desenvolver seguindo as regras
dadas a seguir torna o processo mais simples e mais detalhado em termos de configuração.</h5>

<h3>Reactive</h3>
	
<h5>O uso do form reactive requer:</h5>
	
<h4>Importar o ReactiveFormsModule e FormsModule no app.module.ts do projeto</h4>

    import { ReactiveFormsModule, FormsModule } from '@angular/forms'

<h4>Importar os módulos de uso padrão do @angular/forms no componente desejado<h4>

    import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

<h4>Angular/forms</h4>

<h5>O angular/forms é um módulo que disponibiliza uma série de recursos utilizados na criação de formulários reativos, sendo eles responsáveis 
por definir uma série de características do formulário. Eles são:</h5>

<h4>FormBuilder</h4>

<h5>O FormBuilder age como um facilitador no processo de criação de formulários mais complexos, sendo possível acessar a partir dele os demais
módulos;</h5>

<h4>FormGroup</h4>

<h5>O FormGroup é responsável por agrupar todos os campos de um formulário em um único objeto, por definição cria um grupo. Cada campo recebe
um nome chave para identificá-lo no objeto. Esse objeto é o responsável por cofigurar os campos de forma a criar validações;</h5>

<h4>Validators</h4>
	
<h5>Função que trata de definir parâmetros para o preenchimento correto do formulário, possuindo seus próprios módulos como:</h5>

   >compose() = Permite a declaração de multiplas validações em uma única função,
   >permitindo o retorno individual de cada uma delas;

<h4>Exemplo de Validações</h4>
	
       exemploDeFormulario: FormGroup;

	 ngOnInit(): void {

            this.formularioNoticia = this.formBuilder.group({
            status: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
         })
       }

<h4>Resposta no HTML</h4>

	<input 
         class="form-control me-2" 
         type="text"
         formControlName ="status">
        <span *ngIf ="formularioNoticia.controls['status'].dirty && formularioNoticia.controls['status']
	.hasError('required')"
          style="color: red;">
          Preencha o campo corretamente
	 </span>

<h5>Nesse exemplo são definidas auterações no DOM a partir de validações declaradas no grupo de formulários. Elas definem
o status de required(campo preenchido) e um número máximo de letras. No HTML, um span recebe uma condicional, que diz
que ele só será visível caso o campo de status já tiver sido preenchido e for apagado.</h5>

>Retornando "Preencha o campo corretamente" caso o usuário apague o que foi digitado.

<h4>FormControl</h4>

<h5>Trata os dados de cada formulário de um grupo de forma individual, sendo definido em cada um deles de maneira isolada fora do grupo.
Exemplo:</h5>

<h5>template</h5>

	<form>
	  <input
	   [formControl]="exemploFormControl"
          >
        </form>

	component.ts
	
	exemploFormControl = new FormControl('', [
          Validators.required,
          Validators.maxLength(2)
         ])
	
<h5>Esse exemplo cria validações fora do grupo, sendo necessário declarar um [formControl] em cada input para usá-lo dessa maneira</h5>


<h3>Unindo Conceitos</h3>

<h5>exemplo.componet.ts</h5>
   	
         import { Component, OnInit } from '@angular/core';

	 1º Import de Recursos

	 import { FormBuilder, FormGroup, FormControler, Validators } from '@angular/forms

         @Component({
          selector: 'app-exemplo',
          templateUrl: './exemplo.component.html',
          styleUrls: ['./exemplo.component.css']
         })
         
         export class ExemploComponent implements OnInit {
	
	 2º Declaração da variável que irá receber o group e seu tipo(FormGroup)

	 exemploDeFormulario: FormGroup

	 3º Definição de relação de herança com o FormBuilder

         constructor( builder: FormBuilder ) { }

         ngOnInit(): void {
	  
	 4º A variável pré definida recebe um grupo de inputs que é criado cada 
         vez que a classe ExemploComponent é chamada

          this.formularioExemplo = this.builder.group({
              nome: ['',Validators.compose([Validators.required]),
              email: ['',Validators.compose([Validators.required]),
              senha: ['',Validators.compose([Validators.required, Validators.maxLength(6)]),
            })	  

         }
	
	5º O módulo onSubmit será chamado quando o fomulário for submetido, por isso é preciso definir
	a chamada para esse módulo na tag <form>

	onSubmit() {
	//O console retorna os dados do formulário
	  console.log(this.reativeForm.value)
         }
 
       }
	
<h5>exemplo.componet.html</h5>
	
	6º O formulário recebe dois parâmetros, um que definine o método a ser chamado, o qual corresponde ao uso dos dados
	no submit, e um que o define como um formGroup, este recebendo o identificador da variável criada na classe
	
	<form
 	 (submit) = "onSubmit()"
         [formGroup] = 'exemploDeFormulario'
         >
	 <div class="group">
	  <input
	   type="text"
	   formControlName="nome">
	   <span *ngIf ="formularioNoticia.controls['nome'].dirty && formularioNoticia.controls['mome']
	     .hasError('required')" 
	     style="color: red">
               Preencha o campo corretamente
             </span>
	  </div>
         <div class="group">
	  <input
	   type="email"
	   formControlName="email">
           <span *ngIf ="formularioNoticia.controls['email'].dirty && formularioNoticia.controls['email']
	     .hasError('required')"
	     style="color: red;">
             Preencha o campo corretamente
           </span>
	 </div>
         <div class="group">
	  <input
	   type="password"
	   formControlName="senha">
	  <span *ngIf ="formularioNoticia.controls['senha'].dirty && formularioNoticia.controls['senha']
	    .hasError('required')"
            style="color: red;">
            Preencha o campo corretamente
          </span>
          <span *ngIf="formularioNoticia.controls['senha'].hasError('maxlength')"  style="color: red;">
            Número máximo de campos preenchido
          </span>
	 </div>
         <div class="button-area">

	 7º Botão do tipo submit que define a chamada para submeter o formulário

           <button 
            type="submit" 
            class="btn btn-dark"
            style="background-color: black;"
            >
            Criar
           </button>
           <button 
            type="button" 
            class="btn btn-dark"
            (click) = "onCancel()"
            style="background-color: black;"
            >
            Cancelar
           </button>
          </div>
	</form>

<h2>Services</h2>

  <h5>Criar um novo Serviço</h5>

   ><h5>ng g c s + nome</h5>

     
  <h5>Os services são utilizados como mecanismo de realocação ou reaproveitamento
  de dados que são compartilhados entre componentes por toda a aplicação. Os
  services são responsáveis por buscar, válidar ou fazer o log de dados na
  aplicação, deixando para o component a responsabilidade de gerir o View.
  Um dos propósitos básicos dos Services é criar a conexão com o Back-end.</h5>

    A definição de uma class de Service é imediatamente precedida do decorator @Injectable().
    
 <h3>HttpClient</h3>
 
 
 <h2>Modules</h2>

  <h5>Os modules, ou mais especificamente NgModules, têm a responsábilidade de
  tornar disponíveis funcionalidades que são providas em diferentes partes             
  da apliação, além de prover suas póprias funcionalidades. Os NgModules             
  são extremamente importantes para que a reutilização do código seja possível;</h5>
  
 

<h2>Ferramentas</h2>

![bootstrap_plain_wordmark_logo_icon_146620](https://user-images.githubusercontent.com/61476935/107878686-21c9b280-6eb3-11eb-878c-8c4381915caa.png)

<h5>O Bootstrap é uma ferramenta de desenvolvimento criada pela google para disponibilizar componentes CSS utilizados no desenvolvimento
de interfaces web, os quais implicam diretamente na experiência do usuário. A ferramenta dá acesso a layouts e componentes pré estilizados
como Navbars, buttons, cards e entre outros.</h5>

<h4>Instalação</h4>

><h5>npm install bootstrap</h5>
><h5>yarn add bootstrap@4.6.0</h5>

<h4>Declaração de Uso</h4>

<h5>Há duas formas para defeinir o uso do bootstrap como uma dependência CSS, e por conseguinte,<br>
definir acesso a suas funcionalidades e componentes:</h5>

<h4>Angular.json</h4>

<h5>Na pasta Angular.json, no espaço definido como "styles", crie a rota para acesso ao módulo
referente ao bootstrap:</h5><br>

   ><h5>"styles": [<br>
   >            "src/styles.css",<br>
   >            "src/styles.sass",<br>
   >            "src/styles.scss",<br>
   >            "src/styles.stylus",<br>	  
   >            "node_modules/bootstrap/dist/css/bootstrap.min.css"<br>
   >          ]</h5>

<h4>Importando No Style Sheet</h4>

<h5>A definição da rota acima também pode ser feita na pasta principal de folha de estilo do projeto,
definida na criação do mesmo, independente do tipo de CSS utilizado:</h5><br>

  ><h5>/* You can add global styles to this file, and also import other style files */<br>
  >@import '~bootstrap/dist/css/bootstrap.min.css';</h5>

<h5>A partir dessas declarações, é possível utilizar os componentes que o bootstrap disponibiliza
em sua documentação em sua aplicação.</h5>

><h5>Documentação: https://getbootstrap.com/docs/5.0/getting-started/introduction/</h5>
