import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Jewelry } from '../models/jewelry';
import { MatDialog } from '@angular/material/dialog';
import { JewelryDialogComponent } from '../jewelry-dialog/jewelry-dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Jewelry[] = [];
  displayedProducts: Jewelry[] = [];
  displayLimit: number = 3;
  showAll: boolean = false;

  constructor(private productService: ProductService ,public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(jewelries => {
      this.products = jewelries;
      this.displayedProducts = this.products.slice(0, this.displayLimit); // Display only 3 initial products
    });
  }

  seeMore(): void {
    this.showAll = true; // Update flag to display all products
    this.displayedProducts = this.products; // Show all products
  }
  openDialog(jewelry: Jewelry): void {
    const dialogRef = this.dialog.open(JewelryDialogComponent, {
      width: '400px',
      data: jewelry
    });
  }
}
