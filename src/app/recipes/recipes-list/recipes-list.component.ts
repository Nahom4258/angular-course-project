import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe1', 'this is recipe1', 'https://cdn.w600.comps.canstockphoto.com/new-recipe-stamp-clipart-vector_csp19651351.jpg'),
    new Recipe('Recipe2', 'this is recipe2', 'https://www.tasteofhome.com/wp-content/uploads/2019/07/no-photo-recipe-700x700.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
