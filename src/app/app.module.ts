import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './category/category.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { FormsModule } from '@angular/forms';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostAddComponent } from './blog-post/blog-post-add/blog-post-add.component';
import { BlogPostListComponent } from './blog-post/blog-post-list/blog-post-list.component';
import { BlogPostUpdateComponent } from './blog-post/blog-post-update/blog-post-update.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryListComponent,
    CategoryUpdateComponent,
    BlogPostComponent,
    BlogPostAddComponent,
    BlogPostListComponent,
    BlogPostUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
