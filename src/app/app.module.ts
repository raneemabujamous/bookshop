import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './component/landing/landing.component';
import { SignupComponent } from './component/signup/signup.component';
import { SiginComponent } from './component/sigin/sigin.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import { HomeComponent } from './component/home/home.component';
import { BookComponent } from './component/book/book.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { FirestoreModule, provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {CategoryService} from "./service/category.service"
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';
import { ModalpopupComponent } from './component/modalpopup/modalpopup.component'
import {MaterialModule} from '../material-module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    LandingComponent,
    SignupComponent,
    SiginComponent,
    HomeComponent,
    BookComponent,
    CategoriesComponent,
    ModalpopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
     MatToolbarModule,
     MaterialModule,
    MatIconModule,  
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
AngularFireModule.initializeApp(environment.firebase),

    provideAuth(() => getAuth()),
provideFirestore(() => getFirestore()),

provideDatabase(()=>getDatabase()),
// AngularFirestoreModule,

    HotToastModule.forRoot(),

  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
