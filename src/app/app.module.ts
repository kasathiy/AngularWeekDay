import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DecoratePipe } from './pipes/decorate.pipe';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DeleteService } from './services/delete.service';
import { ObservableComponent } from './components/observable/observable.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpServiceComponent } from './components/http-service/http-service.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ReactiveLoginComponent } from './components/reactive-login/reactive-login.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { BasicAuthInterceptorService } from './services/basic-auth-interceptor.service';

const appRoutes = [
  {
    path: "home", component: HomePageComponent,
    canActivate: [AuthGuardGuard],
    children: [
      { path: "employeeList", component: EmployeeListComponent },
      { path: "addEmployee", component: AddEmployeeComponent },
      { path: "employee/:key", component: EmployeeComponent }]
  },
  { path: "", component: ReactiveLoginComponent }];

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
    HttpServiceComponent,
    AddEmployeeComponent,
    LoginComponent,
    HomePageComponent,
    ReactiveLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BasicAuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
