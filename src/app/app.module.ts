import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {ProductService} from './product.service';
import {CartComponent} from './cart/cart.component';
import {CartService} from './cart.service';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { KdvPipe } from './product/pipe/kdv.pipe';
import { FilterPipe } from './product/pipe/filter.pipe';
import {FormsModule} from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './category.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    CartSummaryComponent,
    KdvPipe,
    FilterPipe,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: 'apiUrl',
      useValue: 'http://northwindapi.azurewebsites.net/api'
    }, CartService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
