import { Category } from './../../models/category.model';
import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalpopupComponent } from '../modalpopup/modalpopup.component';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  {
    categories:any = [];
  editState: boolean = false;
  itemToEdit:any= [];

constructor(public CategoryService:CategoryService, private dialog: MatDialog){}


  ngOnInit() {
    this.CategoryService.getData().subscribe(categories=> {
this.categories=categories    });
  }
 editItem(event:any, item: Category){
  event.preventDefault();

    this.editState = true;
    this.itemToEdit = item;
  }
  updateItem(item: Category){
    this.CategoryService.updateItem(item);
    this.clearState();
  }
  
  deleteItem(event:any, item: Category){
    this.clearState();
    this.CategoryService.deleteItem(item);
  }
  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }
  //  onSubmit(){
  //   if(this.item.title != ''){
  //     this.CategoryService.addItem(this.item);
  //     this.item.title = '';
  //   }
  // }
  OpenDialog(enteranimation: any, exitanimation: any,Categories:any) {

    this.dialog.open(ModalpopupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "50%",
      data:{
        empcode:Categories
      }
    })
  }
}
