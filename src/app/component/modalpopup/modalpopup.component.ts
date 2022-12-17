import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { MasterService } from '../Service/master.service';
// import * as alertify from 'alertifyjs'
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from './../../models/category.model';


import { CategoryService } from 'src/app/service/category.service';



@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.css']
})
export class ModalpopupComponent implements OnInit {

 item: Category = {
    title: '',
  }
  // constructor(private service: MasterService, public dialogref: MatDialogRef<ModalpopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
constructor(private CategoryService: CategoryService, public dialogref: MatDialogRef<ModalpopupComponent>) {
  
}
  desdata: any;
  respdata: any;
  editdata: any;

  ngOnInit(){
  }

//   loadDes() {
//     this.service.GetDes().subscribe(result => {
//       this.desdata = result;
//     });
//   }

//   LoadEditData(code: any) {
//     this.service.GetEmployeebycode(code).subscribe(item => {
//       this.editdata = item;
//       this.Reactiveform.setValue({code:this.editdata.code,name:this.editdata.name,email:this.editdata.email,
//         phone:this.editdata.phone,designation:this.editdata.designation,gender:'M',isactive:true})
//     });
//   }

  Reactiveform = new FormGroup({
    title: new FormControl(""),
  });
  onSubmit(){
    const title:any = this.Reactiveform.value
      this.CategoryService.addItem(title);
      // this.item.title = '';
            this.dialogref.close();

  }
}
