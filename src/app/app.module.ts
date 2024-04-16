import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule}  from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProdutosModule } from './produtos/produtos.module';
import { HttpClientModule } from '@angular/common/http';
import { TesteModule } from './teste/teste.module';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    ProdutosModule,
    HttpClientModule,
    TesteModule,
    AppMaterialModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
