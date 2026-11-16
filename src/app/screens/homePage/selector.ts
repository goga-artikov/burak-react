import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

/**
 * ============================================================================
 * 5-QADAM: SELECTORS (RESELECT) - STORE DAN MA'LUMOTNI TORTIB OLISH
 * ============================================================================
 * "Reselect" kutubxonasi yordamida yaratilgan Selectorlar:
 *  1. Global State dan faqat kerakli ma'lumotni saralab oladi.
 *  2. Memoization (keshlash) qiladi: Agar tanlangan ma'lumot o'zgarmasa,
 *     komponentni keraksiz qayta render (re-render) bo'lishidan asraydi.
 */

// 5.1. Input-Selector: Umumiy State ichidan faqat "homePage" bo'limini ajratib oladi
const selectHomePage = (state: AppRootState) => state.homePage;

// 5.2. Output-Selectorlar: createSelector orqali har bir property uchun alohida memoized selectorlar
export const retrievePopularDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularDishes, // Faqat popularDishes o'zgarsagina yangi qiymat beradi
);

export const retrieveNewDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newDishes,
);

export const retrieveTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers,
);
