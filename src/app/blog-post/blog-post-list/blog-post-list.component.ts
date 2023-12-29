import { Component, OnInit } from '@angular/core';
import { Blog } from '../../model/Blog';
import { BlogpostService } from '../../services/blogpost.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../model/Category';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrl: './blog-post-list.component.css'
})
export class BlogPostListComponent implements OnInit {

  bloglist: Blog[] = [];
  categoryName :Category = new Category();
  constructor(private _service: BlogpostService,private _category:CategoryService) { }
  ngOnInit(): void {
    // this._category.GetById()
    this._service.GetAll().subscribe({ next: (val) => { this.bloglist = val } });
  }

  delete(id?: number) {
    this._service.Delete(id);
  }
}
