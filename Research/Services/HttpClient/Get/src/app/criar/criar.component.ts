import { Component, OnInit, Input} from '@angular/core';
import { CriarService } from './criar.service';
import { Noticia } from '../lista/model/Noticia'
// import { form } from 'rxjs';

// Forms
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {
  
  @Input () Noticia: Noticia;
  formularioNoticia: FormGroup;
  submitted = false;
  

  constructor( private service: CriarService, private formBuilder: FormBuilder ) { }


  ngOnInit(): void {

    this.formularioNoticia = this.formBuilder.group({
      status: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
      titulo: ['', Validators.compose([Validators.required])],
      autor: ['', Validators.compose([Validators.required])],
      escricao: ['', Validators.compose([Validators.required])],
    })

  }

  onSubmit() {
    if(this.formularioNoticia.invalid) {
      alert('Preencha todos os campos')
    }
    else {
      this.submitted = true;
      this.service.criar(this.formularioNoticia.value).subscribe((data: any) => {
        console.log('OK')
      });
      console.log(this.formularioNoticia.value);
    }
  }
  
  onCancel() {
    
  }

}

