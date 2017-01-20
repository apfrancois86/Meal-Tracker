import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
      <div>
        <div *ngIf="childSelectedTask">
          <h3>{{childSelectedTask.food}}</h3>
          <hr>
          <h3>Edit Meal</h3>
          <label>Enter name of food:</label>
          <input [(ngModel)]="childSelectedTask.food">
          <label>Enter description of food:</label>
          <input [(ngModel)]="childSelectedTask.description">
          <label>Enter total calories in food:</label>
          <input type="number" [(ngModel)]="childSelectedTask.calories">
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `

})

export class EditFoodComponent {

}
