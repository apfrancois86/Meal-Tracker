import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker for {{month}}/{{day}}/{{year}}</h1>
    <hr>
    <food-list [childFoodList]="masterFoodList"></food-list>
    <edit-food></edit-food>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth()+1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear()
  selectedFood = null;
  masterFoodList: Food[] = [
    new Food('Steak','delicious filet mignon', 600),
    new Food('Cheesecake', 'I ate two pieces!', 850),
    new Food('Green Salad','fresh and healthy', 300)
  ];
}
