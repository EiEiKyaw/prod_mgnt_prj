import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Recipe One',
      'This is testing 1',
      'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_1920,c_limit/04102023-ratatouille-lede.jpg'
    ),
    new Recipe(
      'Recipe Two',
      'This is testing 2',
      'https://assets.epicurious.com/photos/63ea6ba855007bc33c26ba0b/4:3/w_4862,h_3647,c_limit/Shakshuka_RECIPE_020923_47096.jpg'
    ),
  ];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
