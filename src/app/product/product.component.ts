import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  allowNewProduct = false;

  constructor() {
    setTimeout(() => {
      this.allowNewProduct = true;
    }, 3000);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
