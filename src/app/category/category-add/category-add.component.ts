import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/Category';
import { NgForm } from '@angular/forms';
import axios from 'axios';
import { Guid } from "guid-typescript";
import { CategoryListComponent } from '../category-list/category-list.component';



@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css',
})
export class CategoryAddComponent implements OnInit {
   
  model: Category = new Category();
  categorylist : CategoryListComponent = new CategoryListComponent();
  constructor() {

  }
  ngOnInit(): void {

    
  }

  add(category: NgForm) {
    
    if (category.valid) {
     axios({
      method:'post',
      url:'http://localhost:3000/category',
      data:{
        id:Guid.create().toString(),
        Name:category.value.Name
      },
      headers:{
        "Content-Type":'application/json'
      }}).then(x=>{
      console.log(`Data : ${x.data} status : ${x.status}`);
      console.log(`Id : ${category.value.Id} status : ${category.value.Name}`);
     })
     .catch(x=>{
      console.log(x);
      
     });
    }
  }
  
}
