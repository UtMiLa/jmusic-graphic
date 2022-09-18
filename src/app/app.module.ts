import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowPhysicalModelComponent } from './show-physical-model/show-physical-model.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { ShowLogicalModelComponent } from './show-logical-model/show-logical-model.component';
import { ShowModelComponent } from './show-model/show-model.component';

@NgModule({
  declarations: [	
    AppComponent,
      ShowPhysicalModelComponent,
      DemoComponent,
      ShowLogicalModelComponent,
      ShowModelComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
