import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { AuthService } from '../../servizi/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form : FormGroup = new FormGroup({});

  constructor(
    private authService : AuthService
  ) {
    this.createForm();
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  createForm() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.eseguiLogin(this.form.value).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.tokenType + ' ' + response.accessToken);
          console.log('Login effettuato con successo')
        },
        error: (err) => {
        console.error('Errore nel login:', err);
        
      } 
      })
    }  
    else {
      this.form.markAllAsTouched();
    }
  }
}
