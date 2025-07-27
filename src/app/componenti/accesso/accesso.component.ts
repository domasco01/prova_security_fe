import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accesso',
  imports: [],
  templateUrl: './accesso.component.html',
  styleUrl: './accesso.component.css'
})
export class AccessoComponent {

  constructor(private router: Router) {

  }

  navigaLogin() {
    this.router.navigate(['/login']);
  }

  navigaRegistrazione() {
    this.router.navigate(['/registrazione']);
  }

}
