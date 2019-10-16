import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DecoratePipe } from './pipes/decorate.pipe';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DeleteService } from './services/delete.service';
import { ObservableComponent } from './components/observable/observable.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpServiceComponent } from './components/http-service/http-service.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    TestComponent,
    HighlightDirective,
    DecoratePipe,
    EmployeeListComponent,
    EmployeeComponent,
    ObservableComponent,
    HttpServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
