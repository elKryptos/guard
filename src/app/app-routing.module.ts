import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RandomComponent } from './components/random/random.component';
import { controlRandom } from './guards/guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "random", component: RandomComponent, canActivate: [controlRandom]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
