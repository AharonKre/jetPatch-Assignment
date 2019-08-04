import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from 'app/modules/core.module';
import { ModalsModule } from 'app/modules/modals.module';
import { SharedModule } from 'app/modules/shared.module';
import { AppRoutingModule } from 'app/app-routing.module';

import { AppComponent } from 'app/app.component';
import { MoviesComponent } from 'app/components/movies/movies.component';
import { HeaderComponent } from 'app/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HeaderComponent
  ],
  imports: [
    CoreModule,           // contains all services
    SharedModule,         // contains all shared components/pipes/directives
    ModalsModule,         // contains all modals
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
