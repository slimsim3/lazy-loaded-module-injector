import { Component } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent {
  public urls = [
    'assets/pizza.jpg',
    'assets/salad.jpg',
    'assets/cake.jpg'
  ];
}
