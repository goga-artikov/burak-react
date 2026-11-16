import { Member } from "./member";
import { Product } from "./product";

/** 
 * ============================================================================
 * 1-QADAM: REDUX STATE TIP VA STRUKTURASINI BELGILASH (TypeScript)
 * ============================================================================
 * Redux bilan ishlashda eng birinchi qadam — Store ichida qanday ma'lumotlar
 * saqlanishini (State arxitekturasini) oldindan tiplashtirish (Interface yaratish).
 */

/** REACT APP STATE: Butun ilovaning umumiy (global) State interfeysi */
export interface AppRootState {
  homePage: HomePageState; // Kelajakda boshqa sahifalar ham shu yerga qo'shiladi (products, orders va h.k.)
}

/** HOME PAGE STATE: HomePage sahifasiga tegishli ma'lumotlar strukturasi */
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** PRODUCT PAGE **/

/** ORDERS PAGE **/
