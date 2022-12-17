import { Injectable } from '@angular/core';
// import { Firestore, collectionData, collection,getDocs } from '@angular/fire/firestore';
import {Category} from "../models/category.model"
import { Observable } from 'rxjs';
// import { AngularFireDatabase,AngularFireObject } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public itemsCollection: AngularFirestoreCollection<Category>;
    public itemDoc: AngularFirestoreDocument<Category>;

  items: Observable<Category[]>;
  constructor(public afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Category>('category2');
    this.items = this.itemsCollection.valueChanges();
        this.itemDoc = afs.doc<Category>('category2/1');
this.items = this.itemsCollection.snapshotChanges().pipe(map((changes:any) => {
      return changes.map((a:any) => {
        const data = a.payload.doc.data() as Category;
        data.id = a.payload.doc.id;
        return data;
      });
    }))
    console.log(this.items,  this.itemsCollection)
  }
  getData(){
    return this.items
  }
  addItem(item: Category) {
    this.itemsCollection.add(item);
  }
  // update(item: Category) {
  //   this.itemDoc.update(item);
  // }
 updateItem(item: Category){
    this.itemDoc = this.afs.doc(`category2/${item.id}`);
    this.itemDoc.update(item);
  }
    deleteItem(item: Category){
    this.itemDoc = this.afs.doc(`category2/${item.id}`);
    this.itemDoc.delete();
  }
}

// export class CategoryService {
// // category$: Observable<any>;
// //   itemRef: AngularFireObject<any>;
//    itemsCollection: AngularFirestoreCollection<Category>;
//   items: Observable<Category[]>;

// constructor( private firestore: AngularFirestore) {
//     // const collections =collection( firestore,"category2");
//     // this.category$ = collectionData(collections);
// // querySnapshot.forEach((doc:any) => {
// //   // doc.data() is never undefined for query doc snapshots
// //   console.log(doc.id, " => ", doc.data());
// // });
//     this.itemRef = firestore.object('category2');
//     this.category$ = this.itemRef.valueChanges();


//     // this.category$ = firestore.object('category2').valueChanges();
// console.log(this.category$, this.itemRef,"this.category$this.category$")

//   }
//   ngOnInit(){

//   }
//   //  getCategory() {this.firestore
//   //   return this.category$
//   // }
// }


