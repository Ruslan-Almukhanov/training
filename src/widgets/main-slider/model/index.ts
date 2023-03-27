import axios from "axios";
import { createEffect, createEvent, createStore, sample } from "effector";
import { Product } from "../types";

export const pageOpened = createEvent();
export const $products = createStore<Product[]>([]);

const getProductFx = createEffect(async () => {
  const url = "https://fakestoreapi.com/products";
  const res = await axios.get(url);

  return res.data;
});

sample({
  clock: pageOpened,
  target: getProductFx,
});

sample({
  clock: getProductFx.doneData,
  target: $products,
});
