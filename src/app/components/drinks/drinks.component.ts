import { Component } from '@angular/core';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent {
  public urls = [
    'assets/coffee.jpg',
    'assets/soda.jpg',
    'assets/beer.jpg'
  ];
}
