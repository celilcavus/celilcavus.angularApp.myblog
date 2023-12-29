import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostUpdateComponent } from './blog-post-update.component';

describe('BlogPostUpdateComponent', () => {
  let component: BlogPostUpdateComponent;
  let fixture: ComponentFixture<BlogPostUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogPostUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogPostUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
