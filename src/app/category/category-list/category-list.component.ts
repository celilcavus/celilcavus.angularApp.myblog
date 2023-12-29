import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Category } from '../../model/Category';
import { CategoryService } from '../../services/category.service';
import { NEVER, Observable, never } from 'rxjs';
import { BaseRepository } from '../../interfaces/BaseRepository';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  category: Category[] = []

  constructor(private _category: CategoryService) {

  }
  ngOnInit(): void {
    this._category.GetAll().subscribe({ next: (value) => { this.category = value } });
  }


  delete(id?:number)
  {
    this._category.Delete(id)
  }
 

}
