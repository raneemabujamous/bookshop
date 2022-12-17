import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "../app/component/landing/landing.component"
import {SiginComponent} from "../app/component/sigin/sigin.component"
import {SignupComponent} from "../app/component/signup/signup.component"
import {HomeComponent} from "../app/component/home/home.component"
import { BookComponent } from './component/book/book.component';
import {CategoriesComponent} from "./component/categories/categories.component"
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: SiginComponent,
  },
  {
    path: 'sign-up',
    component: SignupComponent,
  },
   {
    path: 'book',
    component: BookComponent,
  },
   {
    path: 'category',
    component: CategoriesComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
