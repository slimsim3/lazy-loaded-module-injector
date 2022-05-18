import { Injector, NgModuleRef } from '@angular/core';
import { Module } from '../module.enum';
import { BaseViewModule } from './base-view-module';

export class NoneViewModule extends BaseViewModule<undefined> {
  public module = Module.None;
  
  public loadModuleRef(_: Injector): Promise<NgModuleRef<undefined> | undefined> {
    return Promise.resolve(undefined);
  }
}