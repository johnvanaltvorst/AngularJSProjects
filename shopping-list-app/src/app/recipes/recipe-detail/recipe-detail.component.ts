import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //@Input() show: string = '';
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  //showDropdown(){
  //  this.show = !this.show ? 'open' : '';
  //}
}
