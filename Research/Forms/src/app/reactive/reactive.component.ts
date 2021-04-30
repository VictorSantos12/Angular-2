import { Component, OnInit } from '@angular/core';
import { Model } from './model/model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

model: Model[] = [];
reativeForm: FormGroup;

  constructor( private formbuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.reativeForm = this.formbuilder.group({
      name:[ '',  Validators.compose([Validators.required])],
      email:[ '',  Validators.compose([Validators.required])],
      password:[ '',  Validators.compose([Validators.required])],

    })

  }

  onSubmit() {
    console.log(this.reativeForm.value)
  }

}
