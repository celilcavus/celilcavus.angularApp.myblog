import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blog } from '../../model/Blog';
import { BlogpostService } from '../../services/blogpost.service';
import { Category } from '../../model/Category';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-blog-post-add',
  templateUrl: './blog-post-add.component.html',
  styleUrl: './blog-post-add.component.css'
})
export class BlogPostAddComponent implements OnInit {
  model: Blog = new Blog();
  category: Category[] = [];
  constructor(private _blog: BlogpostService, private _category: CategoryService) { }
  ngOnInit(): void {
    this._category.GetAll().subscribe({ next: (val) => { this.category = val } });
  }

  AddPost(blog: NgForm) {
    if (blog.valid) {

      this._blog.Post({
        CategoryId:blog.value.CategoryId,
        Title: blog.value.Title,
        Image: blog.value.Image,
        Description: blog.value.Description
      });
    }
  }
}
