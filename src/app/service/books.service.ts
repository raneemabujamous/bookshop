import { Injectable } from '@angular/core';
import {Category} from "../models/category.model"
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import {Book} from "../models/book.model"


@Injectable({
  providedIn: 'root'
})
export class BooksService {
    // book: Observable<Book[]>;
  book:any =[];

  constructor(public afs: AngularFirestore) {
       this.book=  afs.collection('category2').doc('id').get()


  }
   onSelect(){
return this.book
   }
}
