import { createNgModuleRef, Injector, NgModuleRef } from '@angular/core';
import { DrinksModule } from '../../components/drinks/drinks.module';
import { Module } from '../module.enum';
import { BaseViewModule } from './base-view-module';

export class DrinksViewModule extends BaseViewModule<DrinksModule> {
  public module = Module.Drinks;

  public async loadModuleRef(injector: Injector): Promise<NgModuleRef<DrinksModule> | undefined> {
    const { DrinksModule } = await import('../../components/drinks/drinks.module');
    return createNgModuleRef(DrinksModule, injector);
  }
}
