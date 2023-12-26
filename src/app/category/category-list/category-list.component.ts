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
  GetAll(): Promise<any> {
    const promise = axios.get<Category[]>("http://localhost:3000/category");
    const valuePromise = promise.then(x => this.category = x.data).catch(x => console.log(x));
    return valuePromise;
  }
 
  ngOnInit(): void {
    this.GetAll()
  }
 



}
