import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState; // Yangi qo'shilgan ProductsPage state tipi
  ordersPage: OrdersPageState;
}

/** HOME PAGE **/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/**
 * PRODUCT PAGE STATE: */
export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

/** ORDERS PAGE **/

export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
