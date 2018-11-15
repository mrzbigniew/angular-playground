import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup = this.fb.group({
    login: this.fb.control(
      {
        value: '',
        disabled: false
      },
      [Validators.required]
    ),
    password: this.fb.control(
      {
        value: '',
        disabled: false
      },
      [Validators.required]
    )
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.form.value);
  }
}
