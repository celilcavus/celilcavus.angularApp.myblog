import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Category } from '../../model/Category';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.css'
})
export class CategoryUpdateComponent implements OnInit {

  categories: Category = new Category()
  constructor(private _route: ActivatedRoute, private _category: CategoryService) {

  }
  ngOnInit(): void {
    var value = this._category.GetById(this._route.snapshot.params['id']);
    value.forEach(x => {
      this.categories.id = x.id,
        this.categories.Name = x.Name
    });
  }
  Update(category: NgForm) {
    this._category.Put({id:this._route.snapshot.params['id'],Name:category.value.Name});
  }
}
