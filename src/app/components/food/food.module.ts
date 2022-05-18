import { NgModule } from '@angular/core';
import { ILoadableModule } from 'src/app/models/loadable-module';
import { GalleryModule } from '../gallery/gallery.module';
import { FoodComponent } from './food.component';

@NgModule({
  declarations: [
    FoodComponent
  ],
  imports: [
    GalleryModule
  ],
  exports: [
    FoodComponent
  ]
})
export class FoodModule implements ILoadableModule { 
  public getComponent(): typeof FoodComponent {
    return FoodComponent;
  }
}
