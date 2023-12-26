import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Category } from '../../model/Category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  categories:any;
  constructor(private _category:CategoryService)
  {}
  ngOnInit(): void {
    this.categories  = this._category.GetAll(); 
  }

  
  
}
