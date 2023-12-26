import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { BaseRepository } from '../interfaces/BaseRepository';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements BaseRepository<Category> {

  categorys: Category[] = [];
 
  GetAll(): Observable<Category[]> {
    return axios.get<Category[]>("http://localhost:3000/category").then(x => this.categorys = x.data).catch(x => {console.log(x);});
  }
  Post(item: Category): void {
   
  }
  GetById(id: number): Category {
    throw new Error('Method not implemented.');
  }
  Put(item: Category): void {
    throw new Error('Method not implemented.');
  }
  Delete(item: Category): void {
    throw new Error('Method not implemented.');
  }
}
