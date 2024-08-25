import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product, Welcome, newProduct } from '../models/product.model';
import { ProductService } from '../product-service.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  newProduct: newProduct = {
    title: '',
    description: '',
    price: 0,
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.products;
      console.log(this.products);
    });
  }

  addProductList(): void {
    this.productService
      .addProduct(this.newProduct)
      .subscribe((product) => {
        this.products.push(product);
        this.newProduct = {title: '', description: '', price: 0 };
      });
  }

  deleteProductList(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((product) => product.id !== id);
    });
  }
}
