import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveForm',
  templateUrl: './reactive-form.component.html',
  })

  export class ReactiveFormComponent {

    form = new FormGroup({
      username: new FormControl('',[Validators?.required]),
      password: new FormControl('',Validators?.required)
    });

  }
