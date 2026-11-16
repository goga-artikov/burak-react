import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/homePage/slice";
import reduxLogger from "redux-logger";

/**
 * ============================================================================
 * 3-QADAM: REDUX STORE (MARKAZIY OMBOR) SOZLASH
 * ============================================================================
 * configureStore() — Butun dasturning barcha slice reducerlarini yagona
 * markaziy Store ga jamlaydi va Redux middleware-larni sozlaydi.
 */

export const store = configureStore({
  // 3.1. Middleware: Action va Reducer orasidagi oraliq vosita (masalan, console da actionlarni ko'rsatib turuvchi logger)
  middleware: (getDefaultMiddleware) =>
    // @ts-ignore
    getDefaultMiddleware().concat(reduxLogger),

  // 3.2. Reducerlar ro'yxati: Har bir sahifa/modul reduceri shu yerda umumiy global state ga ulanadi
  reducer: {
    homePage: HomePageReducer, // global state da state.homePage bo'lib turadi
  },
});

/** 3.3. TypeScript yordamchi tiplari (dispatch va global state turlari) */
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
