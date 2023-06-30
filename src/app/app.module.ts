import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyChildComponent } from './my-child/my-child.component';
import { FormsModule } from '@angular/forms';
import { Child2Component } from './child2/child2.component';
import { GrandchildComponent } from './grandchild/grandchild.component';
import { PipePipe } from './pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyChildComponent,
    Child2Component,
    GrandchildComponent,
    PipePipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
