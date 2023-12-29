import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { BaseRepository } from '../interfaces/BaseRepository';
import axios from 'axios';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements BaseRepository<Category> {

  constructor(private _http: HttpClient) {

  }

  GetAll() {
    return this._http.get<any>("http://localhost:3000/Category");
  }
  Post(item: Category): void {
    this._http.post("http://localhost:3000/Category", { id: item.id, Name: item.Name }).subscribe(x => { console.log(x), this.GetAll() });
  }
  GetById(id: number) {
    return this._http.get<any>("http://localhost:3000/Category/" + id);
  }
  Put(item: Category): void {
    this._http.put("http://localhost:3000/Category/" + item.id, { id: item.id, Name: item.Name }).subscribe({
      next: (value) => { console.log(value) }, error: (err) => {
        console.log(err)
      }
    });
  }
  Delete(id?:number): void {
    this._http.delete("http://localhost:3000/Category/" + id).subscribe({
      next: (value) => {
        console.log(value);
        this.GetAll()
      }, error: (err) => console.log(err)
    })
  }
}
