import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/Category';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../services/category.service';



@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css',
})
export class CategoryAddComponent implements OnInit {

  model: Category = new Category();
  constructor(private _http: HttpClient, private _category: CategoryService) {

  }
  ngOnInit(): void {

  }

  add(category: NgForm) {

    if (category.valid) {
      this._category.Post({Name:category.value.Name});
    }

  }
}
