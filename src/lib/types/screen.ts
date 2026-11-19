import { Member } from "./member";
import { Product } from "./product";

/** 
 * ============================================================================
 * 1-QADAM: REDUX GLOBAL STATE TURLARI (TypeScript Interfaces)
 * ============================================================================
 * Roli: Redux Store ichida har bir sahifa uchun qanday ma'lumotlar saqlanishini
 * qat'iy tiplashtirish va belgilash.
 */

/** REACT APP STATE: Butun ilovaning umumiy (global) State interfeysi */
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductPageState; // Yangi qo'shilgan ProductsPage state tipi
}

/** HOME PAGE **/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** 
 * PRODUCT PAGE STATE:
 * Roli: Mahsulotlar sahifasida saqlanadigan 3 ta asosiy ma'lumot strukturasi:
 *  1. restaurant: Restoran (oshxona) ma'lumotlari
 *  2. chosenProduct: Tanlangan bitta mahsulot tafsilotlari
 *  3. products: Filtrlangan mahsulotlar ro'yxati
 */
export interface ProductPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}
export type ProductsPageState = ProductPageState;

/** ORDERS PAGE **/
