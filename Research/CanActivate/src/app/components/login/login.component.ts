import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

//Services
import { LoginService } from './login.service'

//Classes
import { Login } from './model/login';
import { userCallBack } from './model/user';

//Senha
var sha512 = require('js-sha512').sha512;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

login: Login;
user: userCallBack;
formGroup: FormGroup;
loginValidator: boolean = false;


  constructor( private builder: FormBuilder, private loginService: LoginService ) { }

  ngOnInit() {

    this.formGroup = this.builder.group({
      Usuario: ['', 
      Validators.compose([Validators.required])],
      Senha: ['', 
      Validators.compose([Validators.required, Validators.minLength(6)])]

    })
    
  }

 loginValidation() {

    if(this.formGroup.invalid) {
       alert("Revise seus dados");
    }else {
      this.loginValid();
    }
    
 }

 loginValid() {
    this.loginValidator = true;

    this.login = this.formGroup.value;
    this.login.Senha = sha512(this.login.Senha);
    this.loginService.logIn(this.login)
    .subscribe(
     (data: userCallBack) => {
      this.loginReturntreatment(data);
   })
   .add(() => {
     if(this.loginValidator = true) {
      this.localStorageRoutine(this.user)
     }
   })
  }
  
loginReturntreatment(data: userCallBack) {
  this.user = data;
  localStorage.setItem("chave", this.user.chave);
}

localStorageRoutine(user: userCallBack) {
  localStorage.setItem('nome', user.nome );
  localStorage.setItem('email', user.email );
  localStorage.setItem('sessao', user.chave );
  location.href = './menu';
  
}

}
