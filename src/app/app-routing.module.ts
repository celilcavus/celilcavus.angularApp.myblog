import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostUpdateComponent } from './blog-post/blog-post-update/blog-post-update.component';
;

const routes: Routes = [
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
