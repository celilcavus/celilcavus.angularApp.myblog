import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Category } from '../../model/Category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.css'
})
export class CategoryUpdateComponent implements OnInit {

  categories : Category = new Category()
  constructor(private _route : ActivatedRoute){

  }
  ngOnInit(): void {
    axios.get<Category>(`http://localhost:3000/category?id=${this._route.snapshot.params['id']}`).then(x=> this.categories = x.data)

  }
Update(category:NgForm){
  axios({
    url:`http://localhost:3000/category?id=${this._route.snapshot.params['id']}`,
    method:'put',
    data:{
      id:this._route.snapshot.params['id'],
      Name:category.value.Name
    },
      headers:{
        "Content-Type":'application/json'
      }
  }).then(x=>console.log(x.data)).catch(x=>console.log(x));
}
}
