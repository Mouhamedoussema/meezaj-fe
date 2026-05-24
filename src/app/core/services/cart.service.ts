import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly STORAGE_KEY = 'meezaj_cart';
  private itemsSubject = new BehaviorSubject<CartItem[]>(this.loadFromStorage());

  items$ = this.itemsSubject.asObservable();

  get items(): CartItem[] {
    return this.itemsSubject.value;
  }

  get count(): number {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  }

  get total(): number {
    return this.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  }

  add(product: Product, size: string, quantity = 1): void {
    const items = [...this.items];
    const idx = items.findIndex(i => i.product._id === product._id && i.size === size);
    if (idx >= 0) {
      items[idx] = { ...items[idx], quantity: items[idx].quantity + quantity };
    } else {
      items.push({ product, size, quantity });
    }
    this.persist(items);
  }

  updateQuantity(productId: string, size: string, quantity: number): void {
    const items = this.items
      .map(i => i.product._id === productId && i.size === size ? { ...i, quantity } : i)
      .filter(i => i.quantity > 0);
    this.persist(items);
  }

  remove(productId: string, size: string): void {
    this.persist(this.items.filter(i => !(i.product._id === productId && i.size === size)));
  }

  clear(): void {
    this.persist([]);
  }

  private persist(items: CartItem[]): void {
    this.itemsSubject.next(items);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
  }

  private loadFromStorage(): CartItem[] {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY) ?? '[]');
    } catch {
      return [];
    }
  }
}
