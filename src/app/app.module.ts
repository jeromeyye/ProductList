import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product-service.service';

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, CommonModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
