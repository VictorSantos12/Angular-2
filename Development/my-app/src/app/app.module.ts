import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './scr/app/component/new/new.component';
import { NewComponent } from './src/app/component/new-component.component.ts/new-component.component.ts.component';
import { NewComponentComponent } from './src/app/new-component/new-component.component';
import { OtherNewComponentComponent } from './components/other-new-component/other-new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    NewComponent.Component.TsComponent,
    NewComponentComponent,
    OtherNewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
