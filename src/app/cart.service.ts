import {Injectable} from '@angular/core';
import {CartItem} from './cart/cart-item';
import {Product} from './product/product';
import {CART_ITEM_LIST} from './cart/card-item-kist';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartItems: CartItem[];

  constructor() {
  }

  addToCart(product: Product): void {
    // tslint:disable-next-line:prefer-const
    let addedItem = CART_ITEM_LIST.find(t => t.product.productId === product.productId);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      const cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CART_ITEM_LIST.push(cartItem);
    }
  }

  list(): CartItem[] {
    return CART_ITEM_LIST;
  }
  removeFromCart( product: Product){
    const addedItem = CART_ITEM_LIST.find(t => t.product.productId === product.productId);
    const indexNo = CART_ITEM_LIST.indexOf(addedItem);
    // tslint:disable-next-line:triple-equals
    if (indexNo != -1) {
      CART_ITEM_LIST.splice(indexNo, 1 );
    }
  }

}
