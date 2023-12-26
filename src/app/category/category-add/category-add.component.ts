import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/Category';
import { NgForm } from '@angular/forms';
import axios from 'axios';
import { Guid } from "guid-typescript";



@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css',
})
export class CategoryAddComponent {

  model: Category = new Category();
  constructor() {

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
