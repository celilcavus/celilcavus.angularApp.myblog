import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostUpdateComponent } from './blog-post/blog-post-update/blog-post-update.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
;

const routes: Routes = [
  {
    path: "home", component: LayoutComponent, children: [
      { path: "index", component: HomeComponent, pathMatch:"full" }
    ]
  },
  { path: "category", component: CategoryComponent },
  { path: "category-update/:id", component: CategoryUpdateComponent },
  { path: "category-delete/:id", component: CategoryComponent },
  { path: "blog", component: BlogPostComponent },
  { path: "blog-update/:id", component: BlogPostUpdateComponent },
  { path: "blog-delete/:id", component: BlogPostComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
