import { createSlice } from "@reduxjs/toolkit";
import { ProductsPageState } from "../../../lib/types/screen";

/**
 * ============================================================================
 * 2-QADAM: REDUX SLICE (ProductsPage Slice)
 * ============================================================================
 * Roli: ProductsPage sahifasi uchun Redux Toolkit bo'lagini yaratish:
 *  - Boshlang'ich holatni (initialState) belgilaydi
 *  - State-ni o'zgartiruvchi funksiyalarni (reducers) jamlaydi
 *  - Komponentlar chaqirishi uchun Action-larni avtomatik yaratib beradi
 */

// 2.1. Boshlang'ich holat (initialState)
const initialState: ProductsPageState = {
  restaurant: null,
  chosenProduct: null,
  products: [],
};

// 2.2. Slice yaratish: name, initialState va reducers
const productsPageSlice = createSlice({
  name: "productsPage",
  initialState,
  reducers: {
    // Restoran ma'lumotlarini state-ga saqlash
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    // Tanlangan bitta mahsulotni state-ga saqlash
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },
    // Mahsulotlar ro'yxatini state-ga saqlash
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

// 2.3. Action Creatorlarni export qilish (Komponentlarda dispatch qilib chaqirish uchun)
export const { setRestaurant, setChosenProduct, setProducts } =
  productsPageSlice.actions;

// 2.4. Reducerni export qilish (Store.ts ga ulab qo'yish uchun)
const ProductsPageReducer = productsPageSlice.reducer;
export default ProductsPageReducer;
