import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  form = this.fb.group({
    loginData: this.fb.group({
      login: [
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ],
      password: [
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ]
    }),
    userData: {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.group({
        country: ['', Validators.required],
        state: [''],
        city: [''],
        zip: [''],
        street: ['']
      })
    }
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
