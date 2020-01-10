import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Product} from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[];
  constructor(
    private  productService: ProductService
  ) { }
productResult: any;
  loading: boolean = true;
  addedProduct: string;
  addToCard(product: Product) {
    this.addedProduct = product.productName;
  }
  ngOnInit(): void {
    this.productService.getProduct().subscribe(response => {
      this.productResult = response;
      console.log(this.productResult);
      this.loading = false;
    });
  }

}
