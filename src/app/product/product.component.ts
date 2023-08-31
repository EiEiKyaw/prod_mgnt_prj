import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  allowNewProduct = false;
  productCreationStatus = 'No new product creates.';
  productName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewProduct = true;
    }, 2000);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onCreateProduct() {
    this.productCreationStatus = this.productName + ' was created.';
  }

  onUpdateProduct(event: Event) {
    this.productName = (<HTMLInputElement>event.target).value;
  }
}
