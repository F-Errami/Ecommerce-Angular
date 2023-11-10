// order-dialog.component.ts

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from '../models/order';
import { ProductService } from '../services/product.service';
import { Jewelry } from '../models/jewelry';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {
  order: Order;
  products: Jewelry[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Order,
    private productService: ProductService
  ) {
    this.order = data;
  }

  ngOnInit(): void {
    // Fetch product details using ProductService
    this.fetchProductDetails();
  }

  private fetchProductDetails(): void {
    const productIds = this.order.products.map(product => product.product_id);

    // Fetch products using ProductService
    productIds.forEach(productId => {
      this.productService.getProductById(productId).subscribe(product => {
        if (product) {
          this.products.push(product);
        }
      });
    });
  }

  getQuantity(productId: number): number {
    const product = this.order.products.find(p => p.product_id === productId);
    return product ? product.quantity : 0;
  }
}
