import axios from "axios";
import { createEffect, createEvent, createStore, sample } from "effector";

export const $products = createStore([]);
export const pageOpened = createEvent();

const getProductFx = createEffect(async () => {
  const url = "https://fakestoreapi.com/products";
  const res = await axios.get(url);

  return res.data;
});

sample({
  clock: pageOpened,
  source: $products,
  target: getProductFx,
});
