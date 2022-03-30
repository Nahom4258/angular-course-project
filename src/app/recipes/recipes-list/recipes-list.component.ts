import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() clickedRecipeEmitter = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('Recipe1', 'this is recipe1', 'https://cdn.w600.comps.canstockphoto.com/new-recipe-stamp-clipart-vector_csp19651351.jpg'),
    new Recipe('Recipe2', 'this is recipe2', 'https://www.tasteofhome.com/wp-content/uploads/2019/07/no-photo-recipe-700x700.jpg'),
    new Recipe('Nahom', 'this is nahom', 'https://www.tasteofhome.com/wp-content/uploads/2019/07/no-photo-recipe-700x700.jpg'),
    new Recipe('Another', 'this is another', 'https://cdn-icons-png.flaticon.com/512/3565/3565418.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  recipeClicked(recipe: Recipe){
    this.clickedRecipeEmitter.emit(recipe);
  }

}
