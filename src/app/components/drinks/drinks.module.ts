import { NgModule } from '@angular/core';
import { ILoadableModule } from 'src/app/models/loadable-module';
import { GalleryModule } from '../gallery/gallery.module';
import { RecipientSelectorModule } from '../recipient-selector/recipient-selector.module';
import { DrinksComponent } from './drinks.component';

@NgModule({
  declarations: [
    DrinksComponent
  ],
  imports: [
    GalleryModule,
    RecipientSelectorModule
  ],
  exports: [
    DrinksComponent
  ]
})
export class DrinksModule implements ILoadableModule {
  public getComponent(): typeof DrinksComponent {
    return DrinksComponent;
  }
}
