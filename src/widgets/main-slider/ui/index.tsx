import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useStore } from "effector-react";
import { pageOpened } from "@component/widgets/main-slider/model";
import { Product } from "@component/widgets/main-slider/types";
import { $products } from "@component/widgets/main-slider/model";
import SliderCard from "@component/features/slider/ui/slider-card";

const MainSlider = () => {
  const products = useStore<Product[]>($products);

  useEffect(() => {
    pageOpened();
  }, []);

  return (
    <Carousel autoplay>
      {products.map((product) => (
        <SliderCard product={product} key={product.id} />
      ))}
    </Carousel>
  );
};

export default MainSlider;
