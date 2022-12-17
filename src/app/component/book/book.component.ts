import { Component, ElementRef, ViewChild  } from '@angular/core';
import { BooksService } from 'src/app/service/books.service';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
      books:any = [];
      categories:any = [];


constructor (public CategoryService:CategoryService, public  afs: AngularFirestore){}
	@ViewChild('teams') teams!: ElementRef;

 ngOnInit() {
    this.CategoryService.getData().subscribe(categories=> {
this.categories=categories    });
  }
	selectedTeam = '';
	onSelected():void {
    console.log(	this.selectedTeam,"	this.selectedTeam	this.selectedTeam",this.teams.nativeElement.value)
		this.selectedTeam = this.teams.nativeElement.value;
 this.afs.collection('category2').doc(this.teams.nativeElement.value).get().subscribe(books=> {
this.books=books    });
console.log(   this.books,"   this.books")
	}


  
}
