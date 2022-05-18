import { Injector, NgModuleRef } from '@angular/core';
import { Module } from '../module.enum';

export abstract class BaseViewModule<T> {
  public abstract module: Module
  public abstract loadModuleRef(injector: Injector): Promise<NgModuleRef<T> | undefined>;
}
