import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from "@shared/pipes/reverse.pipe";
import {  TimeAgoPipe } from "@shared/pipes/time-ago.pipe";
import { RouterLinkWithHref } from '@angular/router';

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref]
})
export class ProductComponent {
  //decoradores
  @Input ({required: true}) product!: Product;

  @Output () addToCart = new EventEmitter();

  addToCartHandler () {
    // console.log('Click from child');
    this.addToCart.emit(this.product)
  }
}
