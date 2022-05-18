import { AfterViewInit, Component, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILoadableModule } from './models/loadable-module';
import { BaseViewModule } from './models/view-modules/base-view-module';
import { DrinksViewModule } from './models/view-modules/drinks-view-module';
import { FoodViewModule } from './models/view-modules/food-view-module';
import { NoneViewModule } from './models/view-modules/none-view-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('view', { read: ViewContainerRef })
  public view!: ViewContainerRef;

  public viewModules: BaseViewModule<ILoadableModule | undefined>[] = [
    new NoneViewModule(),
    new FoodViewModule(),
    new DrinksViewModule()
  ];

  private _loadedModule = new BehaviorSubject<BaseViewModule<ILoadableModule | undefined>>(this.viewModules[0]);

  constructor(private _injector: Injector) { }
  
  public ngAfterViewInit(): void {
    this._loadedModule.subscribe(x => this._injectModuleIntoView(x));
  }

  public moduleButtonOnClick(viewModule: BaseViewModule<ILoadableModule | undefined>): void {
    this._loadedModule.next(viewModule);
  }
  
  private async _injectModuleIntoView(viewModule: BaseViewModule<ILoadableModule | undefined>): Promise<void> {
    let moduleRef = await viewModule.loadModuleRef(this._injector);

    if (moduleRef) {
      const component = moduleRef.instance?.getComponent();
      this.view.clear();
      this.view.createComponent(component);

      console.log(`loaded ${viewModule.module} module`);
    } else {
      this.view.clear();
    }
  }
}