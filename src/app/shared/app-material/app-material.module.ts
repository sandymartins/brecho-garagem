import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { MatBadgeModule } from "@angular/material/badge"
import { MatMenuModule } from "@angular/material/menu"
import { MatListModule } from "@angular/material/list"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatAutocompleteModule } from "@angular/material/autocomplete"

@NgModule({
  exports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class AppMaterialModule { }
