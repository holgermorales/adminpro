import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {APP_ROUTES} from './app.routes';
import {RegisterComponent} from './register/register.component';
import {PagesModule} from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    //NopagefoundComponent,
    //DashboardComponent,
    //ProgressComponent,
    //Graficas1Component,
    //HeaderComponent,
    //SidebarComponent,
    //BreadcrumbsComponent,
    //PagesComponent,

  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
