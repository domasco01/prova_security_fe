import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componenti/login/login.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'about', component: AboutComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
