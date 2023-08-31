import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  allowNewProduct = false;
  productCreationStatus = 'No new product creates.';

  constructor() {
    setTimeout(() => {
      this.allowNewProduct = true;
    }, 2000);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onCreateProduct() {
    this.productCreationStatus = 'New product was created.';
  }
}
