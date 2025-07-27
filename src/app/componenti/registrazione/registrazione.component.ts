import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators

 } from '@angular/forms';
@Component({
  selector: 'app-registrazione',
  imports: [ReactiveFormsModule],
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.css'
})
export class RegistrazioneComponent {

  form : FormGroup = new FormGroup({});
  constructor() {
    this.createForm();
  }

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  get nome() {
    return this.form.get('nome');
  }
  get cognome() {
    return this.form.get('cognome');
  }
  get codiceFiscale() {
    return this.form.get('codiceFiscale');
  }

  createForm() {
    this.form = new FormGroup({
      username : new FormControl('', [Validators.required, Validators.minLength(6)]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)]),
      nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
      cognome : new FormControl('', [Validators.required, Validators.minLength(3)]),
      codiceFiscale : new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }
}
