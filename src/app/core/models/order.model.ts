export interface OrderItemRequest {
  productId: string;
  size: string;
  quantity: number;
}

export type PaymentMethod = 'CARD' | 'CASH_ON_DELIVERY';

export interface CreateOrderRequest {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  city: string;
  postalCode: string;
  country: string;
  notes?: string;
  paymentMethod: PaymentMethod;
  items: OrderItemRequest[];
}

export interface Order {
  _id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  city: string;
  postalCode: string;
  country: string;
  notes?: string;
  items: OrderItem[];
  total: number;
  status: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  paymentMethod: PaymentMethod;
  createdAt: string;
}

export interface OrderItem {
  _id: string;
  product: { _id: string; name: string; price: number };
  size: string;
  quantity: number;
  unitPrice: number;
}
