import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/**
 * ============================================================================
 * 6-QADAM: KOMPONENTDA REDUX DAN FOYDALANISH (Dispatch & Selector)
 * ============================================================================
 * Komponentda 2 ta asosiy vazifa bajariladi:
 *  1. DISPATCH: Action-ni ishga tushirish orqali Redux State-ga yangi ma'lumot yozish.
 *  2. SELECTOR: useSelector yordamida Redux Store-dagi ma'lumotni o'qib olish.
 */

/** 6.1. DISPATCHER tayyorlash: Actionlarni dispatch qilishga o'rab beruvchi yordamchi funksiya */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

/** 6.2. SELECTOR tayyorlash: retrievePopularDishes orqali ma'lumotni obyekt ko'rinishida oluvchi selector */
const popularDishesRetriver = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes }),
);

export default function HomePage() {
  /** 6.3. Dispatch funksiyalarini olish (State-ga ma'lumot yozish uchun) */
  const { setPopularDishes } = actionDispatch(useDispatch());

  /** 6.4. Redux Store dagi ma'lumotni o'qib olish (State-dan o'qish uchun) */
  const { popularDishes } = useSelector(popularDishesRetriver);

  useEffect(() => {
    // 6.5. Odatda bu yerda Backend API dan ma'lumot chaqiriladi (masalan, productService.getPopularDishes())
    // So'ngra kelgan ma'lumot: setPopularDishes(data) orqali Redux Store ga yuboriladi (dispatch qilinadi).
  }, []);

  console.log("popularDishes", popularDishes);

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
