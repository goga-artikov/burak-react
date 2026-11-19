import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

/**
 * ============================================================================
 * 4-QADAM: SELECTORS (RESELECT) — STORE DAN MA'LUMOTNI SARALAB OLISH
 * ============================================================================
 * Roli: Global Store ichidan aynan ProductsPage-ga tegishli ma'lumotlarni
 * keshlab (memoized) ajratib olish. Ma'lumot o'zgarmasa, qayta hisob-kitob qilinmaydi.
 */

// 4.1. Input-Selector: Global State-dan faqat "productsPage" qismini ajratib olish
const selectProductsPage = (state: AppRootState) => state.productsPage;

// 4.2. Output-Selectorlar: Har bir property uchun alohida memoized selector
export const retrieveRestaurant = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.restaurant
);

export const retrieveChosenProduct = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.chosenProduct
);

export const retrieveProducts = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.products
);
