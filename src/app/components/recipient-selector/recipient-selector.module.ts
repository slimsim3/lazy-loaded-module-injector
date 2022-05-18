import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipientSelectorComponent } from './recipient-selector.component';



@NgModule({
  declarations: [
    RecipientSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RecipientSelectorComponent
  ]
})
export class RecipientSelectorModule { }
