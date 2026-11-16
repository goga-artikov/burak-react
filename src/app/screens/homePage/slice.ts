import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

/**
 * ============================================================================
 * 2-QADAM: REDUX SLICE YARATISH (State, Reducers, Actions)
 * ============================================================================
 * Redux Toolkit-da "Slice" har bir alohida modul/sahifa uchun yaratiladi.
 * createSlice() bir vaqtning o'zida:
 *  1. Boshlang'ich holatni (initialState) belgilaydi
 *  2. O'zgartiruvchi funksiyalarni (reducers) birlashtiradi
 *  3. Action-larni avtomatik tarzda yaratib beradi
 */

// 2.1. HomePage uchun boshlang'ich bo'sh holat (initial state)
const initialState: HomePageState = {
  popularDishes: [],
  newDishes: [],
  topUsers: [],
};

// 2.2. createSlice yordamida reducer va actionlarni hosil qilish
const homePageSlice = createSlice({
  name: "homePage", // Slice nomi (action type larda prefix sifatida ishlatiladi, masalan: "homePage/setPopularDishes")
  initialState,
  reducers: {
    // Reducer funksiyalari - har biri kelgan yangi ma'lumotni (action.payload) olib, state-ni yangilaydi
    setPopularDishes: (state, action) => {
      state.popularDishes = action.payload;
    },
    setNewDishes: (state, action) => {
      state.newDishes = action.payload;
    },
    setTopUsers: (state, action) => {
      state.topUsers = action.payload;
    },
  },
});

// 2.3. Action Creatorlarni export qilish: Bular komponentlarda dispatch orqali chaqiriladi
export const { setPopularDishes, setNewDishes, setTopUsers } =
  homePageSlice.actions;

// 2.4. Reducerni export qilish: Bu markaziy store ga (store.ts) ulanishi uchun kerak
const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
