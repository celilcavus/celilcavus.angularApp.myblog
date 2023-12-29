import { Injectable } from '@angular/core';
import { BaseRepository } from '../interfaces/BaseRepository';
import { Blog } from '../model/Blog';
import { Category } from '../model/Category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService implements BaseRepository<Blog> {

  constructor(private _http: HttpClient) { }
  GetAll(): Observable<Blog[]> {
    return this._http.get<any>("http://localhost:3000/Blog");
  }
  Post(item: Blog): void {
    this._http.post("http://localhost:3000/Blog", { id: item.id, CategoryId: item.CategoryId, Title: item.Title, Image: item.Image, Description: item.Description }).subscribe({
      next: (val) => {
        console.log(val);
        console.log(item);

      }, error: (err) => {
        console.log(err);
        console.log(item);
      }
    });
  }
  GetById(id: number) {
    return this._http.get<any>("http://localhost:3000/Blog/".concat(id.toString()));
  }
  Put(item: Blog): void {
    this._http.put(`http://localhost:3000/Blog/${item.id}`, { id: item.id, Title: item.Title, Image: item.Image, Description: item.Description }).subscribe({
      error: (val) => {
        console.log(val);
      }
    });
  }
  Delete(id?: number): void {
    this._http.delete(`http://localhost:3000/Blog/${id}`).subscribe({
      error: (val) => {
        console.log(val);
      }
    });
  }
}
