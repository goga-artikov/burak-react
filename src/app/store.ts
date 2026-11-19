import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/homePage/slice";
import reduxLogger from "redux-logger";
import ProductsPageReducer from "./screens/productsPage/slice";

/**
 * ============================================================================
 * 3-QADAM: REDUX STORE (MARKAZIY OMBOR)
 * ============================================================================
 * Roli: Barcha sahifa va modullarning reducerlarini yagona markaziy Store ga jamlash.
 * Dasturdagi har bir yangi sahifa slice-i shu yerda ro'yxatdan o'tkaziladi.
 */

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    // @ts-ignore
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,         // HomePage sahifasi reduceri
    productsPage: ProductsPageReducer, // Yangi qo'shilgan ProductsPage reduceri
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
