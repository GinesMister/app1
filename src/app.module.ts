import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/Components/main/app.component';
import { AppListadoComponent } from './app/Components/app-listado/app-listado.component';
import { VinoService } from './app/Services/vino.service';

@NgModule({
  declarations: [
    AppComponent,
    AppListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    VinoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
