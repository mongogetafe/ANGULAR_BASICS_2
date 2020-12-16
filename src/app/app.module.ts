import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivaNgForComponent } from './directivas/directiva-ng-for/directiva-ng-for.component';
import { DirectivaNgIfComponent } from './directivas/directiva-ng-if/directiva-ng-if.component';
import { CrearProveedorComponent } from './crear-proveedor/crear-proveedor.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaNgForComponent,
    DirectivaNgIfComponent,
    CrearProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
