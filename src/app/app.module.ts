import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DecoratePipe } from './pipes/decorate.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    TestComponent,
    HighlightDirective,
    DecoratePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
