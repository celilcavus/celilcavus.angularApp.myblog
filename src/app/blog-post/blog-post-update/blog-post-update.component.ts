import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blog } from '../../model/Blog';
import { BlogpostService } from '../../services/blogpost.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Category } from '../../model/Category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-blog-post-update',
  templateUrl: './blog-post-update.component.html',
  styleUrl: './blog-post-update.component.css'
})
export class BlogPostUpdateComponent implements OnInit {
  category: Category[] = [];

  constructor(private _service: BlogpostService, private _route: ActivatedRoute, private _category: CategoryService) { }

  model: Blog = new Blog();
  ngOnInit(): void {
    this._category.GetAll().subscribe({ next: (val) => { this.category = val } });

    var value = this._service.GetById(this._route.snapshot.params["id"])
    value.forEach(x => {
      this.model.id = x.id,
        this.model.CategoryId = x.CategoryId,
        this.model.Title = x.Title,
        this.model.Image = x.Image,
        this.model.Description = x.Description
    });
  }

  UpdatePost(form: NgForm) {
    if (form.valid) {
      this._service.Put({
        id: this._route.snapshot.params["id"],
        CategoryId: form.value.CategoryId,
        Title: form.value.Title,
        Image: form.value.Image,
        Description: form.value.Description
      })
    }
  }
}
