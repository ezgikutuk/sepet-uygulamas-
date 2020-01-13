import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor( private categoryService: CategoryService) { }
categories: Category[];
  getCategories() {
    this.categoryService.getCategories().subscribe(response => this.categories = response);
  }
  ngOnInit() {
    this.getCategories();
  }

}
