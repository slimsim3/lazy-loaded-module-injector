import { createNgModuleRef, Injector, NgModuleRef } from '@angular/core';
import { FoodModule } from 'src/app/components/food/food.module';
import { Module } from '../module.enum';
import { BaseViewModule } from './base-view-module';

export class FoodViewModule extends BaseViewModule<FoodModule> {
  public module = Module.Food;
  
  public async loadModuleRef(injector: Injector): Promise<NgModuleRef<FoodModule> | undefined> {
    const { FoodModule } = await import('../../components/food/food.module');
    return createNgModuleRef(FoodModule, injector);
  }
}
