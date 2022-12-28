import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  numero: number = 0;
  numero1: number = 0;
  incremento (){
    this.numero = this.numero + 1;
  }
  decremento (){
    this.numero = this.numero - 1;
  }
  incremento1 (){
    this.numero1 = this.numero1 + 1;
  }
  decremento1 (){
    this.numero1 = this.numero1 - 1;
  }

}
