import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    CardsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardsComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
