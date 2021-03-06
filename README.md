<div align="center">
 <img src="https://user-images.githubusercontent.com/61476935/116641764-c6508200-a943-11eb-969f-54726018142e.png">
</div>

<br>

<img src="https://img.shields.io/static/v1?label=Angular&message=Framework&color=red&style=for-the-badge&logo=Angular"/>


O Angular é um framework Typescript utilizado na criação de aplicações client-side, desenvolvido e mantido pela equipe da Google. Com uma estrutura que permite uma grande diversidade de usos, é bastante comum encontrá-lo em SPA Applications ou aplicações Web no geral. 

A popularidade da ferramenta vem crescendo cada vez mais nos últimos anos, estando lado a lado de outras como o React e o Vue.js, além de possuir um crescente ecosistema formado por mais de 1.7 milhão de desenvolvedores, autores de bibliotecas e criadores de conteúdo.

     	
<h2>Caracteristicas Básicas</h2>
     

Assim como qualquer plataforma de desenvolvimento, o Angular possui uma estrutura com características próprias e funcionalidades específicas. Estas incluem: 


* Uma estrutura de desenvolvimento baseada em components
* Uma collection de bibliotecas que abrangem uma variedade de features, incluindo roteamento, gerenciamento de fomulários, comunicação client-server e muito mais
* Um conjunto de ferramentas de desenvolvimento para ajudar a construir, testar e atualizar seu código. Sendo uma delas a Angular CLI


<h2>Ambiente de Desenvolvimento</h2>


O ambiente de desenvolvimento necessário para utilizar o Angular demanda algumas instalações, portanto, para criar este ambiente, siga o passo a passo a seguir:


<h2>Node.js</h2>


Aplicações Web demandam o uso de uma série de recursos para diferentes funcionalidades, como packages e libs específicas. O Javascript, e por consequência aplicações que fazem uso deste, contam com o NPM(Node package manager) para tal. Que nada mais é quem um host de inúmeros packages que são essenciais para criar uma aplicação. Dada essa necessidade, a documentação a seguir mostra como obter o Node, além de definir algumas características sobre o mesmo:


[Node.js](https://github.com/VictorSantos12/Node.js)


<h2>Typescript</h2>


Como já foi citado, o Angular é desenvolvido sobre a estrutura do Typescript(TS), sendo este um Superset do famoso ECMAScript. O TS é visto como uma otimização do Javascript, sendo mais robusto e se adequando a aspectos mais populares aos desenvolvedores. A inclusão da Orientação a Objetos, por exemplo, torna possível a definição de variáveis tipadas, a criação de classes, e o uso dos demais aspectos da POO, sendo uma das principais adições ao Javascript. O TS também é utilizado em outras ferramentas, como o React, além de aplicações server-side desencolvidas em Node. Para instalar e fazer uso da linguagem, acesse o cmd da sua máquina e use o comando a seguir:


    npm install -g typescript


Para mais informações sobre o Typescript acesse: [typescript.org](https://www.typescriptlang.org/).


<h2>Angular CLI</h2>


A Angular CLI é a ferramenta que permite a criação dos projetos e o gerenciamento das development tasks do Angular, como teste, bundling e deployment. Para obter a Angular CLI e fazer uso de seus recursos, acesse o cmd da sua máquina e use o comando a seguir:


    npm install -g @angular/cli


Após o fim da instalação, verifique se tudo ocorreu bem no processo através do comando a seguir:


    ng --version


Tendo como resultado esperado:


         _                      _                 ____ _     ___
        / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
       / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
      / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
     /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                    |___/
        
    
    Angular CLI: 11.2.11
    Node: 14.16.1
    OS: win32 x64
    
    Angular:
    ...
    Ivy Workspace:
    
    Package                      Version
    ------------------------------------------------------
    @angular-devkit/architect    0.1102.11 (cli-only)
    @angular-devkit/core         11.2.11 (cli-only)
    @angular-devkit/schematics   11.2.11 (cli-only)
    @schematics/angular          11.2.11 (cli-only)
    @schematics/update           0.1102.11 (cli-only)


<h2>Criando uma Aplicação</h2>


O desenvolvimento de aplicações Angular é feito no contexto de um workspace customizável, que por padão, já possui uma estrutura mínima para uso, e essa estrutura será utilizada no processo de entendimento dos conceitos essenciais do framework. O workspace, por sua vez, será abordado de forma aprofundada no futuro. 

Para criar uma aplicação Angular do zero, torne a acessar o terminal de comando e faça o run do comando a seguir no diretório desejado:


    ng new my-app


A Angular-CLI irá solicitar algumas configurações básicas para seu projeto, como o uso de strict e do Angular routing, além de qual style sheet será utilizado. Porém, no momento, estas configurações não irão interferir no entendimento dos próximos assuntos, logo, podem ser escolhidas sem nenhuma especificidade. 

Para executar a aplicação, acesse o diretório criado(my-app) e execute o comando a seguir:

    
    ng serve --open


Uma nova janela será aberta no seu navegador, nela a aplicação será lançada localmente. O resultado é uma estrutura básica de template, meramente explicativa. Ela será posteriormente substituída, então fique a vontade para modificá-la como bem desejar.


<h2>My-app</h2>


Com uma aplicação em mãos, é importante se fazer ciente de como a mesma se divide, as funcionalidades e a razão da existência dos diretórios e arquivos que a compõem. A diante faremos um overview sobre os mais importantes dentre eles:


<h2>e2e</h2>


A primeira folder que a Angular CLI disponibiliza é a <b>e2e</b>, que define uma estrutura de testes unitários utilizando Selenium para a aplicação crida. Ela conta com uma pasta src e três arquivos principais: <b>app.e2e-spec.ts</b>, <b>app.po.ts</b> e <b>tsconfig.e2e.json</b>, cada um possuindo uma funcionalidade na estrutura de testes. 

Para executar o teste padão que a Angular CLI cria, use o comando a seguir no diretório do projeto:


    ng e2e


O resultado deve ser próximo ao seguinte:


    [16:18:23] I/file_manager - creating folder     

    ...

    ✔ Browser application bundle generation complete.
    
    Initial Chunk Files | Names         |      Size  
    vendor.js           | vendor        |   2.36 MB  
    polyfills.js        | polyfills     | 128.83 kB  
    main.js             | main          |  56.23 kB  
    runtime.js          | runtime       |   6.15 kB  
    styles.css          | styles        | 119 bytes
    
                        | Initial Total |   2.54 MB
    
    Build at: 2021-08-29T19:18:41.513Z - Hash: 7253eb4f2b7088370a2b - Time: 8046ms
    
    ** Angular Live Development Server is listening on localhost:4200, open your browser on
    http://localhost:4200/ **
    
    
    √ Compiled successfully.
 
    ...
    
      workspace-project App
        √ should display welcome message
    
    Executed 1 of 1 spec SUCCESS in 0.828 sec.
    [16:18:51] I/launcher - 0 instance(s) of WebDriver still running
    [16:18:51] I/launcher - chrome #01 passed


<h2>node_modules</h2>


A <b><i>node_modules</i></b> é uma folder comum a aplicações que fazem uso do Javascript, sendo basicamente um repositório de funcionalidades úteis aos desenvolvedores. Ela conta com uma série de pacotes e bibliotecas com inúmeros packages que são gerenciados pelo NPM, manager sobre o qual falaremos mais a frente.


<h2>src</h2>


A <b><i>src</i></b> é a main folder da aplicação. É nela que são estruturados todos os componets e módulos, além da estrutura de routing, style sheet e é onde está o index.html do projeto. Ela se divide nas pastas e arquivos a seguir:


<h2>app</h2>


A app folder carrega consigo o que seria o main component ou o main module do projeto. Nela temos acesso a file de routing da aplicação e ao controle de modules, além dos arquivos que compõem qualquer módulo em geral:


<h3>app-routing.module.ts</h3>


Este arquivo só estará presente na sua versão caso você tenha definido a instação do Angular routing ao criar o projeto. É nele que definimos as rotas e seus respectivos components.


<h3>app.component.css</h3>


É o arquivo onde definimos o style sheet de um módulo em específico. Com isso é possível ter uma estrutura desacoplada e components separados.


<h3>app.component.html</h3>


Consiste no template único que cada component possui, e mantém a mesma lógica de estrutura desacoplada citada acima.


<h3>app.component.spec.ts</h3>


É o arquivo de teste unitário que cada component precisa ter para ser incluído na estrutura do Karma.conf.js.


<h3>app.component.ts</h3>


O app.component.ts age como um controller, sendo nele declarada a classe @Component, os métodos e propriedades que definem o comportamento de um component.


<h3>app.module.ts</h3>


Arquivos de gerenciamento dos modules que correspondem as partes do projeto. Todos os modulos e importações da aplicação são declarados no app.module.ts.


<h3>assets</h3>


É o diretório que permite manipular arquivos extras que serão usados na aplicação, como imagens, fontes e entre outros.


<h3>environments</h3>


A pasta de environments, ou ambientes, basicamente identifica em que ambiente a aplicação está em run, se em produção(environments.prod.ts) ou desenvolvimento(environments.ts). A única diferença entre esses arquivos é a atribuição que é dada a variável <b>production</b>, que é logicamente true para produção e false para desenvolvimento.


<h3>index.html</h3>


Arquivo de marcação root definido na angular.json file, onde toda a aplicação começa a ser renderizada.


<h3>main.ts</h3>


Arquivo principal da Solution, definido na angular.json file.


<h3>polyfills.ts</h3>


Arquivo que age como um tradutor, com o qual é possível utilizar recursos do ES6, por exemplo, em navegores que só compilam o ES5, além de várias outras funcionalidades.


<h3>styles.css</h3>


Arquivo de style sheet global da aplicação.


<h3>test.ts</h3>


O test.ts é exigido no karma.conf.js e carrega recursivamente todos os arquivos .spec do framework.


<h3>.browserslistrc</h3>


O arquivo <b>.browserslistrc</b> é utilizado pelo build system para ajustar tanto CSS quanto Javascript aos navegadores listados. Esses navegadores são:


    last 1 Chrome version
    last 1 Firefox version
    last 2 Edge major versions
    last 2 Safari major versions
    last 2 iOS major versions
    Firefox ESR


O browserslistrc também permite verificar quais versões dos navegadores são contempladas pela Angular CLI. Para isso, use o comando a seguir:


    npx browserslist


O resultado deve ser próximo ao seguinte:


    npx: installed 6 in 3.665s
    and_chr 92
    and_ff 90        
    and_qq 10.4      
    and_uc 12.12     
    android 92       
    baidu 7.12       
    chrome 92        
    chrome 91        
    chrome 90        
    edge 92
    edge 91
    firefox 91       
    firefox 90       
    firefox 89       
    firefox 78       
    ie 11
    ios_saf 14.5-14.7
    ios_saf 14.0-14.4
    kaios 2.5        
    op_mini all      
    op_mob 64
    opera 78
    opera 77
    safari 14.1
    safari 14
    safari 13.1
    samsung 14.0
    samsung 13.0


<h3>.editorconfig</h3>


A <b>.editorconfig</b> é um gerenciador de configurações de texto, que ajuda a manter padrões de escrita e identação consistentes para multiplos desenvolvedores trabalhando no mesmo projeto em IDEs distintas.  


<h3>.gitignore</h3>


O <b>.gitignore</b> é utilizado no processo de gerenciamento de versão de um projeto. Cada identificador listado neste arquivo define que seu correspondente no diretório será ignorado caso um commit seja feito.


<h3>angular.json</h3>


O <b>angular.json</b> configura o workspace padrão citado anteriormente. É basicamente um json que relaciona e identifica cada arquivo da estrutura, onde são citadas a versão do projeto e entre outras informações.


<h3>karma.config.js</h3>


O <b>karma.config.js</b> é uma biblioteca utilizada para a criação de testes unitários desenvolvida pela própria equipe do Angular. Ela trata todos os arquivos spec nos vários components.


<h3>package-lock.json</h3>


O <b>package-lock.json</b> descreve as dependências usadas no projeto, dando informações como a versão instalada, links de verificação da integridade dessas dependências, dentre outras coisas.


<h3>package.json</h3>


O <b>package.json</b> é um arquivo de configuração utilizado para estipular e configurar as dependências do projeto, além de listar estruturas importantes como os scripts que podem ser executados dentro da aplicação e dividir dependencies de devDependencies.


<h3>tsconfig.app.json... </h3>


Tanto o <b>tsconfig.app.json</b> quanto os arquivos subsequentes são arquivos que configuram o Typescript e diferentes escalas dentro do porjeto.


<h1>Aplicações Angular: O Essencial</h1>
  

A seguir iremos entrar em contanto com as estruturas mais básicas da composição de uma aplicação desenvolvida com o Angular. É essencial entender essa estrutura antes de abordarmos aspectos diretamente ligados ao desenvolvimento de projetos.


<h2>@NgModule</h2>


Por ser um framework modular, o Angular possui uma estrutura completa para criar e manutenir módulos. Um módulo é composto por um <b><i>@NgModule()</i></b> decorator, que define a classe imediatamente abaixo como um Module, e cuja função é conter todos os components, directives, pipes e providers da aplicação. A seguir temos um exemplo de declaração de um módulo raiz:


    import { NgModule } from '@angular/core'; 


    @NgModule({

    declarations:[Component1, Component2], 

    imports: [Module1, Module2],

    exports: [MyModule],

    providers: [Service1, Service2],

    bootstrap: [AppComponent]})

    class MyModule { }


No my-app project é possível ter acesso ao módulo raiz, que é criado seguindo o modelo de estrutura do Angular modular. A seguir há uma definição básica para os metadados que compõem o módulo raiz:


 - declarations: Lista de todos os components, directives e pipes que serão utilizados no módulo raiz.
 - imports: Lista de outros módulos, os quais serão utilizados em algum component ou no próprio módulo.
 - exports: O conjunto de components, directives e pipes declarados neste NgModule que podem ser usados ​​no módelo de qualquer component que faça parte de um NgModule que importe este NgModule.
 - providers: Lista de serviços disponíveis para todos os components declarados no módulo.
 - bootstrap: Indica o component que será instanciado quando a aplicação iniciar o run.


<h2>@Component</h2>
  

Components são os blocos que sustentam uma aplicação. Um component inclui uma TypeScript class com um <b><i>@Component()</i></b> decorator, um template HTML e um style sheet. O decorator <b><i>@Component()</i></b> define as seguintes especificações:


 - Um template HTML que instrui o Angular a como rederizar o component
 - Uma classe Typescript que define seu comportamento
 - Um seletor CSS que define como o component será utilizado em um template
 - Um CSS set opcional que  define a aparencia que será dada aos elementos do template HTML


A seguir temos um exemplo da estrutura mínima de um Angular component:
 

    import { Component } from '@angular/core'
                      
    @Component({
    
     Selector: 'my-component',
     templateUrl: '<h2>Hello World</h2>',
	
    })

    export class MyComponent {
	    
      constructor() {}

    }


<h3>Selector</h3>


O selector define a posição de uso de um component dentro da árvore de objetos DOM, o referenciando através de uma tag HTML que leva sua marcação, tornando este <i>Child</i> daquele que contenha esta tag. Essa componentização permite criar a árvore de componentes que define a view da aplicação. A imagem a seguir ilustra como essa estrutura funciona:


<div align="center">
  <img src="https://user-images.githubusercontent.com/61476935/131503957-228fad00-e5ea-45ea-a73c-e620f977cdcf.png">
</div>


Para incluir o exemplo anterior dentro da árvore de objetos DOM, usariamos seu selector da seguinte forma:


    <my-component></my-compinent>
    

Dentro do template onde fosse declarado, ele seria renderizado da seguinte forma:


    Hello World


<h3>Class</h3>


O Angular possui uma forte presença da Orientação a Objetos em sua estrutura, sendo assim, uma das partes mais importantes de um component é a sua classe, cuja função é definir todo e qualquer comportamento que ele virá a ter. As classes Typescript são nomeadas seguindo a convensão de nomenclatura <i>camelCase</i>, além é claro da palavra-chave <i>class</i> e do modificador <i>export</i>, que possibilita a importação desta em outras partes da aplicação:

	
    export class MyComponent {
        
        constructor() {}
        
    }


Para quem tem certo conhecimento em POO, a definição de um constructor já é bastante familiar. Porém, os cosntructors de uma classe Angular não se restringem a inicialização de classes ou de objetos, elas são de suma importância no processo de dependency injection, sobre o qual falaremos mais a frente. 


<h3>Template</h3>


Todo component possui um template HTML que declara como esse component será renderizado. É possível declarar um template em inline ou usando um path de um arquivo separado, que é algo mais comum. Além disso, o Angular adiciona funcionalidades a sintaxe do HTML que permitem a inserção de valores dinâmicos vindos do component. Com isso, o DOM sofre um update cada vez que houver uma atualização no state do component. Para entender melhor o conceito, faça as seguintes modificações no my-app criado anteriormente:

No arquivo <i>app.component.ts</i> faça a seguinte alteração:


    import { Component } from '@angular/core';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
    })
    export class AppComponent {
      message = 'Hello, World!';
    }


Remova todo o HTML do arquivo <i>app.component.html</i> e inclua a tag a seguir:


    <p>{{ message }}</p>


O uso das chavez duplas {{ }} é chamado de interpolação, que é um recurso utilizado desde o Angular 1, cuja função é definir que o valor atribuído a uma variável será mostrado na tag em que for declarado. Com isso, ao rodar a aplicação temos a mensagem contida no atributo <i>message</i> em tela. Caso essa mensagem seja modificada, a aplicação irá fazer um rerender da tela, atualizando a mensagem.

...


<h2>@Directives</h2>


Directives, ou diretivas, são classes que atribuem comportamento extra a elementos do template de um component, com as quais é possível gerenciar formulários, listas, styles, e a interface em si. A capacidade de criação de estruturas lógicas mediante a inclusão de diretivas no template de um component dá ao desenvolvedor uma capacidade imensa de manipulação do Document Object Model, criando assim uma interface muito mais interativa. As diretivas disponibilizadas pelo Angular são:


<h3>*ngFor</h3>


Um for é uma declaração de controle de fluxo que executa uma interação de acordo com os parâmetros definidos na sua estrutura, normalmente associada a quantidade de elementos de uma unidade de armazenamento, como uma variável ou vetor. O *ngFor possui o mesmo conceito, e para entendê-lo melhor, imagine o seguinte cenário:


    import { Component } from '@angular/core';


    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
    })

    export class AppComponent {

      movies: string[] = ['Good Fellas', 'The Irishman', 'Taxi Driver'];

      constructor() {}

    }


Temos um component e nele a declaração da propriedade <i>movies</i>. A ela é data a definição de array, e com isso, a ela são atribuídos três índices. Em seguita, na app.component.html, temos:


    <ul>
      <li *ngFor="let movie of movies">
        {{ movie }}
      </li>
    </ul>


Ao declarar um *ngFor, basicamente está sendo dito que o Angular deve interar o atributo movies, e a cada interação, o valor do elemento atual(índice) deve ser atribuído a variável <i>let movie</i>. Também está sendo dito que a tag li deve ser replicada a cada interação. Além disso, há uma interpolação do valor atribuído a let movie, ou seja, para cada interação haverá um li com o valor encontrado no índice. Resultado:


    *Good Fellas
    *The Irishman
    *Taxi Driver


<h3>*ngIf</h3>


A diretiva *ngIf possui o mesmo comportamento de uma estrutura if-else, onde é possível declarar um ou mais parâmetros condicionais, os quais definem o retorno da informação que atender a condição imposta, ou o oposto. Para entendê-lo melhor, imagine o seguinte cenário:


    import { Component } from '@angular/core';


    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
    })

    export class AppComponent {

      songs: string[] = [];

      constructor() {}

    }


Um array to tipo string é declarado como vazio na classe AppComponent. Essa unidade de armazenamento será o elemento base da estrutura condicional que iremos criar com o *ngIf. Em seguida temos:

  
    <div *ngIf="songs.length > 0">
     Lista de músicas
    </div>

    <div *ngIf="songs.length == 0">
     A lista de músicas está vazia
    </div>
    

    //browser:

     A lista de músicas está vazia


Ao lançar a aplicação, temos resultado o definido na condição atendida, esta sendo o length do array songs == 0. Para um resultado diferente modifique o atributo songs incluindo alguns nomes de músicas, com por exemplo:


    songs: string[] = ['Children of the Grave', 'Panaroid', 'Immigrant Song'];
 

Para melhorar um pouco o resultado, modifique o arquivo app.component.html incluíndo a diretiva *ngFor da seguinte forma: 


    <div *ngIf="songs.length > 0">
    Lista de músicas
     <ul>
       <li *ngFor="let song of songs">
         {{ song }}
       </li>
     </ul>
    </div>
   
    <div *ngIf="songs.length == 0">
     A lista de músicas está vazia
    </div>


A condição atendida foi a que definia um length maior que zero para o array songs, resultado em uma alteração do template.


    //browser:

    Lista de músicas
    Children of the Grave
    Panaroid
    Immigrant Song


...


<h2>@Injectable</h2>


O conceito de injeção de dependências é bastante conhecido dos que possuem certa experiência com desenvolvimento, e é bastente comum nos frameworks mais modernos. Não sendo uma exceção no Angular, que possui o decorator <i>@Injectable</i> para tal funcionalidade. O exemplo a seguir mostra a estrutura base de uma classe Injectable:


    import { Injectable } from '@angular/core';


    @Injectable({
      ...
    })
    export class InjectableClass {

    }


Uma classe declarada como @Injectable é definida como uma classe injetável, ou seja, a partir do momento em que sofre instanciação, seja dentro de um component ou de outra classe injectable, os metadados necessários para criar as dependências da mesma serão gerados. Tais dependências podem ser serviços externos, como a chamada de requisições em uma Api, por exemplo. 

O Angular define a injeção de dependências exclusivamente via constructor, ou seja, para que um component possa fazer uso de uma classe Injectable, uma instância dessa classe precisa ser declarada no contructor do component. Observe o exemplo:


    import { Component } from '@angular/core';
    import { InjectableClass } from '...';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
    })
    export class AppComponent {

      constructor(private injectableClass: InjectableClass) {

      }
    }


O Typescript ainda disponibiliza os modificadores de acesso <i>private</i> e o <i>public</i>. Uma Injectable Class declarada como private define que a propriedade a qual ela foi atribuída faz parte da classe ou do component em que ela é declarada, podendo ser chamada através do identificador <i>this.</i>.



<h2>@Pipe</h2>


Pipes são recursos bastante úteis para o Angular. Eles são basicamente macanismos simples que transformam e retornam valores de acordo com os parâmetros declarados. A seguir temos um exemplo de declaração de um Pipe: 


    import { Pipe } from ‘@angular/core’;

    @Pipe({

    name: string

    pure?: boolean

    })


<h2>@Input & @Output</h2>


Tanto o @Input quanto o @Output definem mecanismos de comunicação entre components chamados parents e um ou mais child component. Sendo o @Input() responsável por permitir que um parent component faça updates em um child component, já o @Output() permite que child components enviem dados para seus parents.

   
    import { Input, Output } from ‘@angular/core’;

    @Input({

    bindingPropertyName?: string

    })

    @Output({

    bindingPropertyName?: string

    })


<!-- <h2>@HostListener & @HostBinding</h2>


Um @HostListener é um listener de eventos, que invoca uma função quando um evento é emitido pelo elemento declarado como HostListener. O @HostBinding declara uma ligação de propriedade host, onde um vínculo entre a propriedade e o elemento host é criada, e caso haja uma mudança na propriedade o elemento host será atualizado. Exemplo:


    import {HostListener, Directive, HostBinding} from '@angular/core';
    
    @Directive({selector: '[myDir]'})
    export class HostDirective {
      @HostBinding('attr.role') role = 'admin'; 
      @HostListener('click') onClick() {
        this.role = this.role === 'admin' ? 'guest' : 'admin';
      }
    } -->


<!-- <h2>@ContentChild</h2>


<h2>@ContentChildren</h2>


<h2>@ViewChild</h2>


<h2>@ViewChildren</h2> -->


<h2>Automatizando</h2>


A Angular CLI permite automatizar o processo de criação das suas estruturas através de comandos simples. Para gerar um novo módulo, component ou service basta acessar o diretório do projeto através do terminal e usar um dos comandos a seguir: 


<h3>Module</h3>


    ng g m <name>


<h3>Component</h3>

 
    ng g c <name>


<h3>Service</h3>

   
    ng g s <name>


<h3>Class</h3>


    ng g class <name>


<h3>Interface</h3>


    ng g i <name>


Para criar uma dessas estruturas em uma folder específica, basta definir seu path de acesso dentro do projeto, como no exemplo a seguir:


    ng g c folder-name/component-name
    

<!-- <h2>Angular Routing</h2>


Ao se iniciar um projeto no Angular CLI, uma das solicitações iniciais é definir se o projeto em questão irá utilizar 
o Angular Routes. O Angular Routes, ou apenas routes, é um dos módulos disponibilizados pelo Angular para que seja possível 
definir a navegação e entre outras características de uma aplicação

    <!-- index.html -->
    
  <!-- <!doctype html>
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
    </html> -->

<!-- A estrutura de roteamento pode ser observada mesmo no index.html do projeto. Sendo este o principal arquivo de renderização
da aplicação, a tag base define que esta página, ou melhor, seu conteúdo será a primeira coisa a ser renderizada no loading. Porém,
a mesma não possui um conteúdo propriamente dito. Por padrão o Angular define que o app.componet será a primeira parte da aplicação
a ser renderizada, isso se confirma qunado o seletor referente ao app.component é o conteúdo do index.html

<h2>app.component.html</h2>

Senda o componente inicial do projeto, o app.component será o primeiro a ser renderizado. O mesmo é muito importante pois define
o acesso as demais rotas da aplicação. Veja:

Caso a instalação do pacote de rotas seja solicitada, uma pasta será acrescentada ao app do projeto, nela serão criadas as rotas
da aplicação. Mas antes disso, se o template do AppComponent for acessado, poderá ser vista a segunte tag:

     <router-outlet></router-outlet>

Essa tag define que esse componente irá receber a rota padrão('/') do aplicação, sendo carregada quando a página for acessada.
Isso também define que as demais rotas serão acessadas a partir dela -->

<!-- <h2>app-routing.modules.ts</h2>

    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';

    const routes: Routes = [

    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }

Nessa estrutura estão os imports necessários para que as rotas do sistemas sejam desenvolvidas.
Essas rotas serão criadas dentro da constante definida como routes, seguindo a ordem sintática abaixo:<br>

Crie os componentes referentes a cada rota
	   
    import { ExemploComponent } from './exemplo/exemplo.component'; 

Dentro da const, crie um path:'', referente ao caminho de acesso a essa parte da aplicação,
além do componete que será renderizado nessa rota
	
    { path: 'exemplo', component: ExemploComponent } 

Cada rota poderá ser acessada pela URL através do caminho definido, porém, o usuário nunca irá navegar dessa forma.
Uma forma de criar uma navegação mais aceitável é criando um link ou botão. Para isso, cria-se um deles no template anterior
ao que se deseja acessar. Veja: -->

   <!-- app.component.html -->

  <!-- <button 
     type="button" 
     routerLink="exemplo">
     Exemplo
    </button>

Ao receber o routerLink, quando o botão for clicado o usuário será direcionado para o caminho/componente definido. -->


<!-- <h2>Directives</h2>

As diretivas são estruturas de interação que criam uma nova definição da
View com base em ações do usuário, isso só é possível garças a dinamicidade
do Angular. No Angular há dois tipos distintos de diretivas:
               
<h2>Structural directives</h2>
   
>Alteram o layout adicionando, removendo ou realocando
>elementos DOM;

<h2>Attribute directives</h2>
  
>Alteram a aparencia ou o estado de elementos já existentes, sendo mais difundiadas por serem 
>bem comuns ao JavaScript e portanto ao TypeScript. Elas são:
  
<h2>*ngIf</h2> -->
  
<!-- O *ngIf é a structural directive mais simple de se entender. Tendo como parâmetro um boolean ou qualquer
valor, que possa ser alterado, normalmente associado a um parâmetro, pode tornar um trexo inteiro do DOM
visível ou invisível
     
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
  
O valor de comparação é o mesmo, tendo esse um valor padrão. Quando o valor for um true, o primeiro trexo será visível,
quado for false, este não será mais visível, dando assim lugar ao segundo trexo. Exemplo: -->
  
  <!-- app.component.html -->
  
 <!-- <div *ngIf="exemplo == true">Exemplo</div>
    <div *ngIf="exemplo == false">...</div>
    
    <button *ngIf="exemplo == true" (click)="first()">Esconder</button>
    <button *ngIf="exemplo == false" (click)="second()">Mostrar</button>
   -->
   <!-- app.component.ts -->
    
   <!-- ...
    
    exemplo: boolean = true;
    
    ...
    
    first() {
       this.exemplo = false    
    }
    second() {
       this.exemplo = true   
    } -->
    
    
<!-- No exemplo acima há dois botões, ambos possuem um leitor de eventos de (click), sendo este propriedade
do Angular. Isso define que quando o botão for clicado um método será chamado, este contendo uma nova definição da
propriedade "exemplo". Essa propriedade é usada como parâmetro tanto para os botões quanto para as divs acima deles.
 
<h3>Tornando mais Elegante</h3>
 
Uma forma mais elegante de uso mantém a mesma estrutura lógica, porém, recebe uma definição sintática mais simples, 
e portanto mais "elegante". -->
 
 <!-- app.component.html -->
 
  <!-- //Primeiro
    <p *ngIf="exemplo">
     A expressão recebe um true, portanto,
     o ngIf é verdadeiro, logo ele seria visível.
    </p>
    
    //Segundo
    <p *ngIf="!exemplo">
     A expressão recebe um true, portanto,
     o ngIf é verdadeiro, logo ele seria visível.
    </p>
     -->
 <!-- app.component.ts -->
    
  <!-- ...
    
    exemplo: boolean = true;
    
    ...
    
    first() {
       this.exemplo = false    
    }
    second() {
       this.exemplo = true   
    }
     -->
<!-- Sendo exemplo o parâmetro de comparação, definir um *ngIf com "!exmplo" como argumento, se assemelha 
a definir que esse trexo só irá ser visível caso o valor correspondente a exmplo seja falso. O mesmo 
pode ser dito caso seja true
    
 <h2>ngClass</h2>
    
 <h2>*ngFor</h2>


<h2>Angular Forms</h2>

Tratar formularios de input do usuário é um pilar comum em muitas
aplicações. Aplicações usam forms para permitir que o usuário log, 
atualize seu perfil e para inserir informações restritas, além de
várias outras formas de tratamento de dados.

O Angular provê duas diferentes maneiras para tratar o input do
usuários através do froms, tendo cada um deles diferentes vantagens:

<h2>Template-driven</h2>

<ul>
   <li>Fomulário criado e cofigurado no próprio HTML;</li>
   <li>Validações declaradas no template HTML;</li>
   <li>O FormGroup é deduzido de forma automática pelo próprio Angular;</li>
   <li>Os valores do form são submetidos com o ngSubmit, ou pelo event listener
   (submit) na tag form, a qual irá chamar um módulo de execução do form;</li>
</ul>


<h2>Reactive</h2>

<ul>
   <li>O formulário é criado e cofigurado no componente.ts;</li>
   <li>As validações são criadas dentro do componete.ts;</li>
   <li>O Angular usa o FormGroup que é definido no componente.ts;</li>
   <li>Não usa o ngSumit de forma obrigatória, podendo este ser substituído por um click event em um button do tipo submit;</li>
</ul>


Ambos capituram eventos nos inputs vindos da View, validam este input, criam um modelo de formulário e de dados, e então provêm um modo de
tartamento de mudanças. Entretanto, formulários que utilizam o template-driven tornam o processo de desenvolvimento um tanto lento. Outro ponto
é que, no final das contas, ambos irão agir como um formulário reativo, logo, o resultado final é o mesmo. Porém, desenvolver seguindo as regras
dadas a seguir torna o processo mais simples e mais detalhado em termos de configuração. -->

<!-- <h2>Reactive</h2>
	
O uso do form reactive requer:
	
Importar o ReactiveFormsModule e FormsModule no app.module.ts do projeto

    import { ReactiveFormsModule, FormsModule } from '@angular/forms'

Importar os módulos de uso padrão do @angular/forms no componente desejado

    import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

<h2>Angular/forms</h2>

O angular/forms é um módulo que disponibiliza uma série de recursos utilizados na criação de formulários reativos, sendo eles responsáveis 
por definir uma série de características do formulário. Eles são:

<h2>FormBuilder</h2>

O FormBuilder age como um facilitador no processo de criação de formulários mais complexos, sendo possível acessar a partir dele os demais
módulos;

<h2>FormGroup</h2>

O FormGroup é responsável por agrupar todos os campos de um formulário em um único objeto, por definição cria um grupo. Cada campo recebe
um nome chave para identificá-lo no objeto. Esse objeto é o responsável por cofigurar os campos de forma a criar validações; -->

<!-- <h2>Validators</h2>
	
Função que trata de definir parâmetros para o preenchimento correto do formulário, possuindo seus próprios módulos como:

>compose() = Permite a declaração de multiplas validações em uma única função,
>permitindo o retorno individual de cada uma delas;

<h4>Exemplo de Validações</h4>
	
<!-- app.component.ts -->
   
  <!-- exemploDeFormulario: FormGroup;

	 ngOnInit(): void {

            this.formularioNoticia = this.formBuilder.group({
            status: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
         })
       } -->

<!-- app.component.html -->

<!-- <input 
         class="form-control me-2" 
         type="text"
         formControlName ="status">
        <span *ngIf ="formularioNoticia.controls['status'].dirty && formularioNoticia.controls['status']
	.hasError('required')"
          style="color: red;">
          Preencha o campo corretamente
	 </span> -->

<!-- Nesse exemplo são definidas auterações no DOM a partir de validações declaradas no grupo de formulários. Elas definem
o status de required(campo preenchido) e um número máximo de letras. No HTML, um span recebe uma condicional, que diz
que ele só será visível caso o campo de status já tiver sido preenchido e for apagado. -->

<!-- >Retornando "Preencha o campo corretamente" caso o usuário apague o que foi digitado. --> 

<!-- <h2>FormControl</h2>

Trata os dados de cada formulário de um grupo de forma individual, sendo definido em cada um deles de maneira isolada fora do grupo.
Exemplo:

template

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
	
Esse exemplo cria validações fora do grupo, sendo necessário declarar um [formControl] em cada input para usá-lo dessa maneira

<h2>Unindo Conceitos</h2> -->

  <!-- app.component.ts
   	
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

         } -->
	
<!-- 5º O módulo onSubmit será chamado quando o fomulário for submetido, por isso é preciso definir
	a chamada para esse módulo na tag <form>
	

	onSubmit() {
	//O console retorna os dados do formulário
	  console.log(this.reativeForm.value)
         }
 
       }
	
	6º O formulário recebe dois parâmetros, um que definine o método a ser chamado, o qual <br>
	corresponde ao uso dos dados no submit, e um que o define como um formGroup, este recebendo <br>
	o identificador da variável criada na classe -->
	
<!-- form
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
       <div class="button-area"> -->

<!-- 
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
   -->
<!-- 
<h2>Services</h2>

Criar um novo Service

>ng g c s + nome

Os services são utilizados como mecanismo de realocação ou reaproveitamento
de dados que são compartilhados entre componentes por toda a aplicação. Os
services são responsáveis por buscar, válidar ou fazer o log de dados na
aplicação, deixando para o component a responsabilidade de gerir o View.
Um dos propósitos básicos dos Services é criar a conexão com o Back-end.

    A definição de uma class de Service é imediatamente precedida do decorator @Injectable().
    
<h2>HttpClient</h2>
 
 
<h2>Modules</h2>

Os modules, ou mais especificamente NgModules, têm a responsábilidade de
tornar disponíveis funcionalidades que são providas em diferentes partes             
da apliação, além de prover suas póprias funcionalidades. Os NgModules             
são extremamente importantes para que a reutilização do código seja possível; -->
  

<!-- <h2>Ferramentas</h2>

![bootstrap_plain_wordmark_logo_icon_146620](https://user-images.githubusercontent.com/61476935/107878686-21c9b280-6eb3-11eb-878c-8c4381915caa.png)

O Bootstrap é uma ferramenta de desenvolvimento criada pela google para disponibilizar componentes CSS utilizados no desenvolvimento
de interfaces web, os quais implicam diretamente na experiência do usuário. A ferramenta dá acesso a layouts e componentes pré estilizados
como Navbars, buttons, cards e entre outros.

Instalação

>npm install bootstrap
>yarn add bootstrap@4.6.0

Declaração de Uso

Há duas formas para defeinir o uso do bootstrap como uma dependência CSS, e por conseguinte,<br>
definir acesso a suas funcionalidades e componentes:

Angular.json

Na pasta Angular.json, no espaço definido como "styles", crie a rota para acesso ao módulo
referente ao bootstrap:<br>

   >"styles": [<br>
   >"src/styles.css",<br>
   >"src/styles.sass",<br>
   >"src/styles.scss",<br>
   >"src/styles.stylus",<br>	  
   >"node_modules/bootstrap/dist/css/bootstrap.min.css"<br>
   >]

Importando No Style Sheet

A definição da rota acima também pode ser feita na pasta principal de folha de estilo do projeto,
definida na criação do mesmo, independente do tipo de CSS utilizado:<br>

  >/* You can add global styles to this file, and also import other style files */<br>
  >@import '~bootstrap/dist/css/bootstrap.min.css';

A partir dessas declarações, é possível utilizar os componentes que o bootstrap disponibiliza
em sua documentação em sua aplicação.

>Documentação: https://getbootstrap.com/docs/5.0/getting-started/introduction/ -->
